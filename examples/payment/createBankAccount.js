'use strict';

var environmentKey = 'BRsGqmE7dfqMGKbeq2QKHpCqYEo';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var create = function () {
    spreedly.payment.create({
        'payment_method': {
            'bank_account': {
                'first_name': 'Jon',
                'last_name': 'Doe',
                'bank_routing_number': '021000021',
                'bank_account_number': '9876543210',
                'bank_account_type': 'checking',
                'bank_account_holder_type': 'personal'
            },
            'email': 'jon.doe@example.com',
            'data': {
                'my_payment_method_identifier': 448,
                'extra_stuff': {
                    'some_other_things': 'Can be anything really'
                }
            }
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