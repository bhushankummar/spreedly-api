'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var update = function () {
    spreedly.payment.update('VQbdB0OxyrHnlxZmuAPIAzMg279', {
        'payment_method': {
            'first_name': 'Newfirst',
            'last_name': 'Newlast'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

update();