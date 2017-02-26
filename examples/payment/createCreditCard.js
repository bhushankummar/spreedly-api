'use strict';

var environmentKey = 'BRsGqmE7dfqMGKbeq2QKHpCqYEo';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var create = function () {
    spreedly.payment.create({
        'payment_method': {
            'credit_card': {
                'first_name': 'Joe',
                'last_name': 'Jones',
                'number': '5555555555554444',
                'verification_value': 423,
                'month': '3',
                'year': '2032'
            },
            'email': 'joey@example.com'
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