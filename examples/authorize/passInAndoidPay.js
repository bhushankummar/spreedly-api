'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);

var authorizeUsingAndroidPay = function () {
    //
    spreedly.authorize.usingAndroidPay('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
        'transaction': {
            'android_pay': {
                'payment_data': {
                    'encryptedMessage': 'V65NNwqzK0A1bi0F96HQZr4eFA8fWCatwykv3sFA8Cg4Wn4Ylk/szN6GiFTuYQFrHA7a/h0P3tfEQd09bor6pRqrM8/Bt12R0SHKtnQxbYxTjpMr/7C3Um79n0jseaPlK8+CHXljbYifwGB+cEFh/smP8IO1iw3TL/192HesutfVMKm9zpo5mLNzQ2GMU4JWUGIgrzsew6S6XshelrjE',
                    'ephemeralPublicKey': 'BB9cOXHgf3KcY8dbsU6fhzqTJm3JFvzD+8wcWg0W9r+Xl5gYjoZRxHuYocAx3g82v2o0Le1E2w4sDDl5w3C0lmY=',
                    'tag': 'boJLmOxDduTV5a34CO2IRbgxUjZ9WmfzxNl1lWqQ+Z0='
                },
                'certificate_token': 'Npyj0A5xbeqO1hVNJEa4nvkCHwP',
                'transaction_id': '123456789',
                'test_card_number': '4111111111111111'
            },
            'amount': 1199,
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

authorizeUsingAndroidPay();