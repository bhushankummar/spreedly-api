'use strict';

/*
 Thanks to https://github.com/stripe/stripe-node
 */

Spreedly.DEFAULT_HOST = 'core.spreedly.com';
Spreedly.DEFAULT_PORT = '443';
Spreedly.DEFAULT_BASE_PATH = '/v1';
Spreedly.DEFAULT_RESPONSE_FORMAT = '.json';
Spreedly.DEFAULT_API_VERSION = null;

// Use node's default timeout:
Spreedly.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Spreedly.PACKAGE_VERSION = require('../package.json').version;

Spreedly.USER_AGENT = {
    bindings_version: Spreedly.PACKAGE_VERSION,
    lang: 'node',
    lang_version: process.version,
    platform: process.platform,
    publisher: 'spreedly',
    uname: null
};

Spreedly.USER_AGENT_SERIALIZED = null;

var exec = require('child_process').exec;

var resources = {
    Gateways: require('./resources/Gateways'),
    Payment: require('./resources/Payment'),
    Purchase: require('./resources/Purchase')
};

Spreedly.SpreedlyResource = require('./SpreedlyResource');
Spreedly.resources = resources;

function Spreedly(environmentKey, accessSecret, version) {
    if (!(this instanceof Spreedly)) {
        return new Spreedly(environmentKey, accessSecret, version);
    }

    this._api = {
        auth: null,
        host: Spreedly.DEFAULT_HOST,
        port: Spreedly.DEFAULT_PORT,
        basePath: Spreedly.DEFAULT_BASE_PATH,
        version: Spreedly.DEFAULT_API_VERSION,
        timeout: Spreedly.DEFAULT_TIMEOUT,
        agent: null,
        dev: false
    };

    this._prepResources();
    this.setApiKey(environmentKey, accessSecret);
    this.setApiVersion(version);
    this.setResponseFormat(Spreedly.DEFAULT_RESPONSE_FORMAT);
}

Spreedly.prototype = {

    setHost: function (host, port, protocol) {
        this._setApiField('host', host);
        if (port) {
            this.setPort(port);
        }
        if (protocol) {
            this.setProtocol(protocol);
        }
    },

    setProtocol: function (protocol) {
        this._setApiField('protocol', protocol.toLowerCase());
    },

    setPort: function (port) {
        this._setApiField('port', port);
    },

    setResponseFormat: function (format) {
        this._setApiField('format', format);
    },

    setApiVersion: function (version) {
        if (version) {
            this._setApiField('version', version);
        }
    },

    setApiKey: function (environmentKey, accessSecret) {
        if (environmentKey && accessSecret) {
            this._setApiField('key', environmentKey + ':' + accessSecret);
        }
    },

    setTimeout: function (timeout) {
        this._setApiField(
          'timeout',
          timeout === null ? Spreedly.DEFAULT_TIMEOUT : timeout
        );
    },

    setHttpAgent: function (agent) {
        this._setApiField('agent', agent);
    },

    _setApiField: function (key, value) {
        this._api[key] = value;
    },

    getApiField: function (key) {
        return this._api[key];
    },

    getResponseFormat: function (key) {
        return this._api[key];
    },

    getConstant: function (c) {
        return Spreedly[c];
    },

    // Gets a JSON version of a User-Agent and uses a cached version for a slight
    // speed advantage.
    getClientUserAgent: function (cb) {
        if (Spreedly.USER_AGENT_SERIALIZED) {
            return cb(Spreedly.USER_AGENT_SERIALIZED);
        }
        this.getClientUserAgentSeeded(Spreedly.USER_AGENT, function (cua) {
            Spreedly.USER_AGENT_SERIALIZED = cua;
            cb(Spreedly.USER_AGENT_SERIALIZED);
        });
    },

    // Gets a JSON version of a User-Agent by encoding a seeded object and
    // fetching a uname from the system.
    getClientUserAgentSeeded: function (seed, cb) {
        exec('uname -a', function (err, uname) {
            var userAgent = {};
            for (var field in seed) {
                userAgent[field] = encodeURIComponent(seed[field]);
            }

            // URI-encode in case there are unusual characters in the system's uname.
            userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

            cb(JSON.stringify(userAgent));
        });
    },

    _prepResources: function () {
        for (var name in resources) {
            this[
            name[0].toLowerCase() + name.substring(1)
              ] = new resources[name](this);
        }
    }
};

module.exports = Spreedly;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Spreedly = Spreedly;
