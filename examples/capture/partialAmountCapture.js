'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);

var partialAmount = function () {
    //
    spreedly.capture.partialAmount('M1D0HR7iYJUmcP8aHr6motPGCPU', {
        'transaction': {
            'amount': 50,
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

partialAmount();