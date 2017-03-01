'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    fullAmount: spreedlyMethod({
        method: 'POST',
        path: 'transactions/{transaction_token}/capture.json',
        urlParams: ['transaction_token'],
        required: ['transaction_token']
    }),

    partialAmount: spreedlyMethod({
        method: 'POST',
        path: 'transactions/{transaction_token}/capture.json',
        urlParams: ['transaction_token'],
        required: ['transaction_token']
    })

});
