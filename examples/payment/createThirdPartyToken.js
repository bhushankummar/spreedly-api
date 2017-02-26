'use strict';

var environmentKey = 'BRsGqmE7dfqMGKbeq2QKHpCqYEo';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var create = function () {
    spreedly.payment.create({
        'payment_method': {
            'payment_method_type': 'third_party_token',
            'reference': 'MF424cE3jPVESunRNZW0oFtmyI4',
            'gateway_type': 'litle'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
};

create();