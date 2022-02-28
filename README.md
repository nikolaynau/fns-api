# fns-api

> Methods of working with FNS API.

## Installation

```bash
npm install fns-api axios
```

## Usage

### Login

```js
import axios from 'axios';
import * as fns from 'fns-api';

// Your INN from https://lkfl2.nalog.ru
const inn = '<your inn>';
// Your password from https://lkfl2.nalog.ru
const password = '<your password>';
// Client secret
const clientSecret = '<client secret>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);

loginApi
  .loginLKFL({ inn, password, client_secret: clientSecret })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

### Add Receipt

```js
import axios from 'axios';
import * as fns from 'fns-api';

// Get sessionId from login response
const sessionId = '<your session id>';
// Your receipt data
const fiscalData: fns.FiscalData = {
  date: '2021-06-14T14:32',
  operationType: 1,
  sum: 43600,
  fsId: '9982450301247855',
  documentId: 65724,
  fiscalSign: '7634185632'
};

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

receiptApi
  .addReceipt({ fiscalData, sendToEmail: false })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

### Add Receipt by QR

```js
import axios from 'axios';
import * as fns from '..';

// Get sessionId from login response
const sessionId = '<your session id>';
// QR-data string from the receipt
const qr = '<your qr data scanned from the receipt>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

receiptApi
  .addReceiptQR({ qr })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

### Get Receipt Details

```js
import axios from 'axios';
import * as fns from '..';

// Get sessionId from login response
const sessionId = '<your session id>';
// Get receipt id after call add receipt api
const receiptId = '<your receipt id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

// Periodically make requests, 
// until you get the ReceiptStatus.NPD_FOUND or ReceiptStatus.HAVE_COPY status.
receiptApi
  .getReceipt(receiptId)
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

### Get Receipt List

```js
import axios from 'axios';
import * as fns from '..';

// Get sessionId from login response
const sessionId = '<your session id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

receiptApi
  .getReceipts()
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

### Remove Receipt

```js
import axios from 'axios';
import * as fns from '..';

// Get sessionId from login response
const sessionId = '<your session id>';
// Receipt id
const receiptId = '<your receipt id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

receiptApi
  .removeReceipt(receiptId)
  .then((response) => console.log(response.status))
  .catch((e) => console.error(e));
```

## API Specification

Read [API specification](./docs/spec/README.md) for full information.

## License

Licensed under the [MIT License](./LICENSE).
