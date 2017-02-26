'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var purchaseUsingBank = function () {
    //
    spreedly.purchase.usingBank('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
        'transaction': {
            'bank_account': {
                'first_name': 'Joe',
                'last_name': 'Smith',
                'bank_routing_number': '021000021',
                'bank_account_number': '9876543210'
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

purchaseUsingBank();