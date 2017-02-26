'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';

var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var verify = function () {
    spreedly.gateways.verify('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
        'transaction': {
            'payment_method_token': '56wyNnSmuA6CWYP7w0MiYCVIbW6',
            'retain_on_success': true
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};


verify();
