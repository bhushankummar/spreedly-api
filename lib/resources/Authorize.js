'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    create: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/authorize.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingCreditCard: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/authorize.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingAndroidPay: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/authorize.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    }),

    usingApplePay: spreedlyMethod({
        method: 'POST',
        path: 'gateways/{gateway_token}/authorize.json',
        urlParams: ['gateway_token'],
        required: ['gateway_token']
    })

});
