'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({


    list: spreedlyMethod({
        method: 'GET',
        path: 'transactions.json'
    }),

    show: spreedlyMethod({
        method: 'GET',
        path: 'transactions/{transaction_token}.json',
        urlParams: ['transaction_token'],
        required: ['transaction_token']
    }),

    transcript: spreedlyMethod({
        method: 'GET',
        path: 'transactions/{transaction_token}.json',
        urlParams: ['transaction_token'],
        required: ['transaction_token']
    })

});
