# spreedly-api
This API supported Spreedly's v1 standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (https://docs.spreedly.com/reference/api/v1)

You can find [examples here.](https://github.com/bhushankumarl/spreedly-api/tree/master/examples). This will help you for faster implmentation of 'spreedly-api'

## Installation
```bash
$ npm install spreedly-api --save
```

## Development

Run the installation:

```bash
$ npm install
```

## Configuration

Set your Environment Key and Access Secret. This is available in [Spreedly Document](https://docs.spreedly.com/basics/credentials).

```js
var spreedly = require('spreedly-api')('environmentKey')('accessSecret');
```
### Gateways

#### Create test gateway
```js
    spreedly.gateways.create({
        'gateway': {
            'gateway_type': 'test'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

#### Create production gateway
```js
    spreedly.gateways.create({
        'gateway': {
            'gateway_type': 'stripe',
            'login': 'your Stripe API secret'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

#### Show gateway
```js
    spreedly.gateways.show('7UcPnN6rDdk7nmmCl2LESVkfj2w', function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
```

### Payment Methods

#### Create credit card
```js
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
```

#### Create bank account
```js
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
```

### Purchase

#### Tokenized payment method
```js
    spreedly.purchase.create('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
        'transaction': {
            'payment_method_token': '56wyNnSmuA6CWYP7w0MiYCVIbW6',
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
```

#### Pass-in credit card
```js
    spreedly.purchase.usingCreditCard('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
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
```

#### Pass-in bank account/eCheck
```js
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
```

#### Reference purchase
```js
    spreedly.purchase.usingPaymentMethod('FPKawD8tNdpdavp0wCAUhK7xaNG', {
        'transaction': {
            'amount': 80
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
```

## Author

Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).

