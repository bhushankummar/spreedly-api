'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    list: spreedlyMethod({
        method: 'GET',
        path: 'receivers.json',
    }),

    supportedList: spreedlyMethod({
        method: 'GET',
        path: 'receivers_options.json'
    }),

    show: spreedlyMethod({
        method: 'GET',
        path: 'receivers/{receiver_token}.json',
        urlParams: ['receiver_token'],
        required: ['receiver_token']
    }),

    create: spreedlyMethod({
        method: 'POST',
        path: 'receivers.json'
    }),

    update: spreedlyMethod({
        method: 'PUT',
        path: 'receivers/{receiver_token}.json',
        urlParams: ['receiver_token'],
        required: ['receiver_token']
    }),

    redact: spreedlyMethod({
        method: 'PUT',
        path: 'receivers/{receiver_token}/redact.json',
        urlParams: ['receiver_token'],
        required: ['receiver_token']
    }),

    deliver: spreedlyMethod({
        method: 'POST',
        path: 'receivers/{receiver_token}/deliver.json',
        urlParams: ['receiver_token'],
        required: ['receiver_token']
    })

});
