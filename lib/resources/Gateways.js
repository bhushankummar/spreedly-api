'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    create: spreedlyMethod({
        method: 'POST',
        path: 'gateways.json'
    }),

    list: spreedlyMethod({
        method: 'GET',
        path: 'gateways_options.json'
    }),

    listCreated: spreedlyMethod({
        method: 'GET',
        path: 'gateways.json'
    }),

    show: spreedlyMethod({
        method: 'GET',
        path: 'gateways/{gateway_token}.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    verify: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/verify.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    update: spreedlyMethod({
        method: 'PUT',
        path: 'gateways/{gateway_token}.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    retain: spreedlyMethod({
        method: 'PUT',
        path: 'gateways/{gateway_token}/retain.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    redact: spreedlyMethod({
        method: 'PUT',
        path: 'gateways/{gateway_token}/redact.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    transactions: spreedlyMethod({
        method: 'GET',
        path: 'gateways/{gateway_token}/transactions.json?{querystring}',
        urlParams: ['gateway_token', 'querystring'],
        required: ['gateway_token']
    })

});
