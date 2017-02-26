'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    create: spreedlyMethod({
        method: 'POST',
        path: 'payment_methods.json'
    }),

    list: spreedlyMethod({
        method: 'GET',
        path: 'payment_methods.json'
    }),

    show: spreedlyMethod({
        method: 'GET',
        path: 'payment_methods/{payment_method_token}.json',
        urlParams: ['payment_method_token'],
        required: ['payment_method_token']
    }),

    update: spreedlyMethod({
        method: 'PUT',
        path: 'payment_methods/{payment_method_token}.json',
        urlParams: ['payment_method_token'],
        required: ['payment_method_token']
    }),

    retain: spreedlyMethod({
        method: 'PUT',
        path: 'payment_methods/{payment_method_token}/retain.json',
        urlParams: ['payment_method_token'],
        required: ['payment_method_token']
    }),

    store: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/store.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    redact: spreedlyMethod({
        method: 'PUT',
        path: 'payment_methods/{payment_method_token}/redact.json',
        urlParams: ['payment_method_token'],
        required: ['payment_method_token']
    }),

    recache: spreedlyMethod({
        method: 'POST',
        path: 'payment_methods/{payment_method_token}/recache.json',
        urlParams: ['payment_method_token'],
        required: ['payment_method_token']
    }),

    transactions: spreedlyMethod({
        method: 'GET',
        path: 'payment_methods/{payment_method_token}/transactions.json?{querystring}',
        urlParams: ['payment_method_token', 'querystring'],
        required: ['payment_method_token']
    })

});
