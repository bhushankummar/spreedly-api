'use strict';

var environmentKey = 'BRsGqmE7dfqMGKbeq2QKHpCqYEo';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);

var create = function () {

    spreedly.gateways.create({
        'gateway': {
            'gateway_type': 'test'
        }
    }, function (error, responseGateways) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', responseGateways);
        console.log('response.gateway.token', responseGateways.gateway.token);
        // asynchronously called


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
        }, function (error, responsePaymentMethod) {
            if (error) {
                console.log('error ', error);
                return;
            }
            console.log('responsePaymentMethod', responsePaymentMethod);
            console.log('responsePaymentMethod.transaction.payment_method.token', responsePaymentMethod.transaction.payment_method.token);


            spreedly.purchase.create(responseGateways.gateway.token, {
                'transaction': {
                    'payment_method_token': responsePaymentMethod.transaction.payment_method.token,
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
            // asynchronously called
        });

    });


};

create();