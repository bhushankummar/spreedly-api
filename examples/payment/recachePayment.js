'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var recache = function () {
    spreedly.payment.recache('VQbdB0OxyrHnlxZmuAPIAzMg279', {
        'payment_method': {
            'credit_card': {
                'verification_value': 423
            }
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

recache();