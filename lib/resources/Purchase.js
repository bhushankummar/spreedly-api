'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    create: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/purchase.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingCreditCard: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/purchase.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingBank: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/purchase.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingAndroidPay: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/purchase.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingApplePay: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/purchase.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingPaymentMethod: spreedlyMethod({
        method: 'POST',
        path: 'transactions/{transaction_token}/purchase.json',
        urlParams: ['transaction_token'],
        required: ['transaction_token']
    })

});
