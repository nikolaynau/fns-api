# fns-api

> Methods of working with FNS API.

## Installation

```bash
npm install fns-api axios
```

## Usage

```js
// App.js
import axios from 'axios';
import * as fns from 'fns-api';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, '<your session id>');

receiptApi
  .addReceiptQR({ qr: '<your qr data scanned from the receipt>' })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

## Example

Create `LoginApi` instance to work with login

```js
import axios from 'axios';
import * as fns from 'fns-api';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);
```

Create `ReceiptApi` instance to work with receipts

```js
import axios from 'axios';
import * as fns from 'fns-api';

// Get session id from login response
const sessionId = '<your session id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);
```

Session id you will receive after logging in in any chosen way.

Login with the same credentials as on the site https://lkfl2.nalog.ru

```js
// Your INN from https://lkfl2.nalog.ru
const inn = '<your inn>';
// Your password from https://lkfl2.nalog.ru
const password = '<your password>';
// Client secret
const clientSecret = '<client secret>';

loginApi
  .loginLKFL({ inn, password, client_secret: clientSecret })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

To get information about a check, you must first add receipt

```js
// Your receipt data
const fiscalData: fns.FiscalData = {
  date: '2021-06-14T14:32',
  operationType: 1,
  sum: 43600,
  fsId: '9982450301247855',
  documentId: 65724,
  fiscalSign: '7634185632'
};

receiptApi
  .addReceipt({ fiscalData, sendToEmail: false })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

A receipt can be added according to the data from the [QR-code](./docs/spec/en/receipt-qr-code.md)

```js
// QR-data string from the receipt
const qr = '<your qr data scanned from the receipt>';

receiptApi
  .addReceiptQR({ qr })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

After adding, we can get detailed information about the receipt

```js
// Get receipt id after call add receipt api
const receiptId = '<your receipt id>';

// Periodically make requests,
// until you get the ReceiptStatus.NPD_FOUND or ReceiptStatus.HAVE_COPY status.
receiptApi
  .getReceipt(receiptId)
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

More information about [receipt status](./docs/spec/en/receipt-status.md).

Get a list of all added receipts

```js
receiptApi
  .getReceipts()
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

Remove a receipt from the list of added

```js
// Receipt id
const receiptId = '<your receipt id>';

receiptApi
  .removeReceipt(receiptId)
  .then((response) => console.log(response.status))
  .catch((e) => console.error(e));
```

Refresh session id and refresh token

```js
// Get refresh token from login response
const refreshToken = '<your refresh token>';
// Client secret
const clientSecret = '<client secret>';

loginApi
  .refreshTokens({ refresh_token: refreshToken, client_secret: clientSecret })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

## API Specification

Read [API specification](./docs/spec/en/README.md) for full information.

Translations:

- [API specification (ru)](./docs/spec/ru/README.md)
- [API specification (en)](./docs/spec/en/README.md)

## License

Licensed under the [MIT License](./LICENSE).
