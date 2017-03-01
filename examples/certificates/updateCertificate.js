'use strict';

var environmentKey = 'HNBz7PruqrRTa1oKob3tE6bKcKm';
var accessSecret = 'X4IEKcQzPS5zb2FQba83l94NGiOrNmpnjkpdBd12G4NK4J2S0PF9x3fgEGk6ENcq';
var spreedly = require('../../lib/spreedly')(environmentKey, accessSecret);


var update = function () {
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
};

update();