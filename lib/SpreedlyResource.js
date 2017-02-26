'use strict';

var http = require('http');
var https = require('https');
var objectAssign = require('object-assign');
var path = require('path');

var utils = require('./utils');
var Error = require('./Error');

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Spreedly Resource Sub-Classes
SpreedlyResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
SpreedlyResource.method = require('./SpreedlyMethod');
SpreedlyResource.BASIC_METHODS = require('./SpreedlyMethod.basic.js');

/**
 * Encapsulates request logic for a Spreedly Resource
 */
function SpreedlyResource(Spreedly, urlData) {
    this._Spreedly = Spreedly;
    this._urlData = urlData || {};

    this.basePath = utils.makeURLInterpolator(Spreedly.getApiField('basePath'));
    this.path = utils.makeURLInterpolator(this.path);

    if (this.includeBasic) {
        this.includeBasic.forEach(function (methodName) {
            this[methodName] = SpreedlyResource.BASIC_METHODS[methodName];
        }, this);
    }

    this.initialize.apply(this, arguments);
}

SpreedlyResource.prototype = {

    path: '',

    initialize: function () {
    },

    // Function to override the default data processor. This allows full control
    // over how a SpreedlyResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,

    // String that overrides the base API endpoint. If `overrideHost` is not null
    // then all requests for a particular resource will be sent to a base API
    // endpoint as defined by `overrideHost`.
    overrideHost: null,

    createFullPath: function (commandPath, urlData) {
        return path.join(
          this.basePath(urlData),
          this.path(urlData),
          typeof commandPath === 'function' ?
            commandPath(urlData) : commandPath
        ).replace(/\\/g, '/'); // ugly workaround for Windows
    },

    createUrlData: function () {
        var urlData = {};
        // Merge in baseData
        for (var i in this._urlData) {
            if (hasOwn.call(this._urlData, i)) {
                urlData[i] = this._urlData[i];
            }
        }
        return urlData;
    },

    wrapTimeout: function (promise, callback) {
        if (callback) {
            // Ensure callback is called outside of promise stack.
            return promise.then(function (res) {
                setTimeout(function () {
                    callback(null, res);
                }, 0);
            }, function (err) {
                setTimeout(function () {
                    callback(err, null);
                }, 0);
            });
        }

        return promise;
    },

    _timeoutHandler: function (timeout, req, callback) {
        var self = this;
        return function () {
            var timeoutErr = new Error('ETIMEDOUT');
            timeoutErr.code = 'ETIMEDOUT';

            req._isAborted = true;
            req.abort();

            callback.call(
              self,
              new Error.SpreedlyConnectionError({
                  message: 'Request aborted due to timeout being reached (' + timeout + 'ms)',
                  detail: timeoutErr
              }),
              null
            );
        };
    },

    _responseHandler: function (req, callback) {
        var self = this;
        return function (res) {
            var response = '';

            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                response += chunk;
            });
            res.on('end', function () {
                try {
                    response = JSON.parse(response);
                    if (response.errors) {
                        return callback.call(self, response.errors, null);
                    }
                } catch (e) {
                    return callback.call(
                      self,
                      new Error.SpreedlyAPIError({
                          message: 'Invalid JSON received from the Spreedly API',
                          response: response,
                          exception: e
                      }),
                      null
                    );
                }
                // Expose res object
                Object.defineProperty(response, 'lastResponse', {
                    enumerable: false,
                    writable: false,
                    value: res
                });
                callback.call(self, null, response);
            });
        };
    },

    _errorHandler: function (req, callback) {
        var self = this;
        return function (error) {
            if (req._isAborted) {
                // already handled
                return;
            }
            callback.call(
              self,
              new Error.SpreedlyConnectionError({
                  message: 'An error occurred with our connection to Spreedly',
                  detail: error
              }),
              null
            );
        };
    },

    _request: function (method, path, data, auth, options, callback) {
        var self = this;
        var requestData = data;

        if (self.requestDataProcessor) {
            requestData = self.requestDataProcessor(method, data, options.headers);
        } else {
            requestData = utils.stringifyRequestData(data || {});
        }

        var headers = {
            'Authorization': 'Basic ' + new Buffer(this._Spreedly.getApiField('key')).toString('base64'),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': requestData.length
        };

        // Grab client-user-agent before making the request:
        this._Spreedly.getClientUserAgent(function () {
            if (options.headers) {
                objectAssign(headers, options.headers);
            }
            makeRequest();
        });

        function makeRequest() {
            var timeout = self._Spreedly.getApiField('timeout');
            var isInsecureConnection = self._Spreedly.getApiField('protocol') === 'http';

            var host = self.overrideHost || self._Spreedly.getApiField('host');
            var params = {
                host: host,
                port: self._Spreedly.getApiField('port'),
                path: path,
                method: method,
                agent: self._Spreedly.getApiField('agent'),
                headers: headers
            };

            var req = (
              isInsecureConnection ? http : https
            ).request(params);

            req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
            req.on('response', self._responseHandler(req, callback));
            req.on('error', self._errorHandler(req, callback));

            req.on('socket', function (socket) {
                socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function () {
                    // Send payload; we're safe:
                    req.write(requestData);
                    req.end();
                });
            });
        }
    }

};

module.exports = SpreedlyResource;
