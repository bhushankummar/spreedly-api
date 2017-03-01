'use strict';

var SpreedlyResource = require('../SpreedlyResource');
var spreedlyMethod = SpreedlyResource.method;

module.exports = SpreedlyResource.extend({

    create: spreedlyMethod({
        method: 'POST',
        path: 'certificates.json'
    }),

    list: spreedlyMethod({
        method: 'GET',
        path: 'certificates.json'
    }),

    update: spreedlyMethod({
        method: 'PUT',
        path: 'certificates/{certificate_token}.json',
        urlParams: ['certificate_token'],
        required: ['certificate_token']
    })
});
