'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by Spreedly-node
 */
function _Error() {
    this.populate.apply(this, arguments);
    this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
    this.type = type;
    this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Spreedly's REST API)
 */
var SpreedlyError = _Error.SpreedlyError = _Error.extend({
    type: 'SpreedlyError',
    populate: function (raw) {
        // Move from prototype def (so it appears in stringified obj)
        this.type = raw.type;

        this.stack = (new Error(raw.message)).stack;
        this.rawType = raw.type;
        this.code = raw.code;
        this.param = raw.param;
        this.message = raw.message;
        this.detail = raw.detail;
        this.raw = raw;
    }
});

/**
 * Helper factory which takes raw Spreedly errors and outputs wrapping instances
 */
SpreedlyError.generate = function () {
    return new _Error('Generic', 'Unknown Error');
};

// Specific Spreedly Error types:
_Error.SpreedlyCardError = SpreedlyError.extend({type: 'SpreedlyCardError'});
_Error.SpreedlyInvalidRequestError = SpreedlyError.extend({type: 'SpreedlyInvalidRequestError'});
_Error.SpreedlyAPIError = SpreedlyError.extend({type: 'SpreedlyAPIError'});
_Error.SpreedlyAuthenticationError = SpreedlyError.extend({type: 'SpreedlyAuthenticationError'});
_Error.SpreedlyPermissionError = SpreedlyError.extend({type: 'SpreedlyPermissionError'});
_Error.SpreedlyRateLimitError = SpreedlyError.extend({type: 'SpreedlyRateLimitError'});
_Error.SpreedlyConnectionError = SpreedlyError.extend({type: 'SpreedlyConnectionError'});
