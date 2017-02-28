# spreedly-api
[![Build Status](https://travis-ci.org/bhushankumarl/spreedly-api.svg?branch=master)](https://travis-ci.org/bhushankumarl/spreedly-api)
This API supported Spreedly's v1 standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (https://docs.spreedly.com/reference/api/v1)

You can find [examples here](https://github.com/bhushankumarl/spreedly-api/tree/master/examples). This will help you for faster implmentation of 'spreedly-api'

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

### Authorize

#### Tokenized payment method
```js
    spreedly.authorize.create('7UcPnN6rDdk7nmmCl2LESVkfj2w', {
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
```

### Capture

#### Full amount
```js
    spreedly.capture.fullAmount('M1D0HR7iYJUmcP8aHr6motPGCPU', function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
```

#### Partial amount
```js
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
```

### Certificates

#### List
```js
    spreedly.certificates.list(function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

#### Create
```js
    spreedly.certificates.create({
        'certificate': {
            'algorithm': 'ec-prime256v1',
            'cn': 'MyApp ApplePay Production Certificate',
            'email_address': 'security@yourorg.com'
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

#### Update
```js
    spreedly.certificates.update('OLK1a6xQxWes8qKRb2EpuEXNkIS', {
        'certificate': {
            'pem': '-----BEGIN CERTIFICATE-----\nMIIEiTCCBC6gAwIBAgIIFRZ9ouKAzqwwCgYIKoZIzj0EAwIwgYAxNDAyBgNVBAMM\nK0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENBIC0gRzIxJjAk\nBgNVBAsMHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRMwEQYDVQQKDApB\ncHBsZSBJbmMuMQswCQYDVQQGEwJVUzAeFw0xNTAyMTkyMDMzMzBaFw0xNzAzMjAy\nMDMzMzBaMIG5MTowOAYKCZImiZPyLGQBAQwqbWVyY2hhbnQuY29tLnNlYXRnZWVr\nLlNwcmVlZGx5QXBwbGVQYXlUZXN0MUAwPgYDVQQDDDdNZXJjaGFudCBJRDogbWVy\nY2hhbnQuY29tLnNlYXRnZWVrLlNwcmVlZGx5QXBwbGVQYXlUZXN0MRMwEQYDVQQL\nDAo5QjNRWTlXQlo1MRcwFQYDVQQKDA5TZWF0R2VlaywgSW5jLjELMAkGA1UEBhMC\nVVMwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQhoBD6FaOXUJq3e4EoI7rWemTz\nhLaPlAdF87WzmbhWKVNJ9LAEhrBjAtj6is765Ow2dnYta0QPF9EJoubwKOjKo4IC\nVTCCAlEwRwYIKwYBBQUHAQEEOzA5MDcGCCsGAQUFBzABhitodHRwOi8vb2NzcC5h\ncHBsZS5jb20vb2NzcDA0LWFwcGxld3dkcmNhMjAxMB0GA1UdDgQWBBQMV4lSAdev\nm6sv1MVm5yR0gWij+jAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIS2hMw6hmJy\nFlmU6BqjvUjfOt8LMIIBHQYDVR0gBIIBFDCCARAwggEMBgkqhkiG92NkBQEwgf4w\ngcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBi\neSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxp\nY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0\naWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVt\nZW50cy4wNgYIKwYBBQUHAgEWKmh0dHA6Ly93d3cuYXBwbGUuY29tL2NlcnRpZmlj\nYXRlYXV0aG9yaXR5LzA2BgNVHR8ELzAtMCugKaAnhiVodHRwOi8vY3JsLmFwcGxl\nLmNvbS9hcHBsZXd3ZHJjYTIuY3JsMA4GA1UdDwEB/wQEAwIDKDBPBgkqhkiG92Nk\nBiAEQgxAODlDQjI1MDkxOTI0RDY3RjlFMEM2QUVDMzA0MENBMkFGNzA4MEYzRTBG\nQ0NFMTZBOTY5RDkyMUE0QkM5RTA1RjAKBggqhkjOPQQDAgNJADBGAiEAvKYdzDtD\nQ87guVNkybbcEY1Y/nXO9Ry+4fVDwXYMET0CIQDEiK1+xSSziPZ/PPQHF8MCWsD0\nLDW0aLigLHbDgQcrXA==\n-----END CERTIFICATE-----\n'
        }
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
```

### Transactions

#### List
```js
    spreedly.transactions.list(function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

#### Show
```js
    spreedly.transactions.show('9xYaLekcLzT6gRet1CmbXUU8JsL', function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

#### Transcript
```js
    spreedly.transactions.transcript('9xYaLekcLzT6gRet1CmbXUU8JsL', function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
        // asynchronously called
    });
```

## Author

Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).

