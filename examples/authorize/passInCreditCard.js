'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);

var authorizeUsingCreditCard = function () {
    //
    spreedly.authorize.usingCreditCard('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
        'transaction': {
            'credit_card': {
                'first_name': 'Joe',
                'last_name': 'Smith',
                'number': '4111111111111111',
                'verification_value': '123',
                'month': '12',
                'year': '2018'
            },
            'amount': 100,
            'currency_code': 'USD'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

authorizeUsingCreditCard();