import axios from 'axios';
import * as fns from '..';
import { ReceiptStatus } from '..';

/*
To get a receipt, do the following:
- Login and get sessionId.
- Add receipt by fiscal or QR data.
- Periodically make requests to receive a receipt until the status is equal to successful.
*/

// Your INN from https://lkfl2.nalog.ru/
const inn = '<your inn>';
// Your password from https://lkfl2.nalog.ru/
const password = '<your password>';
// Client secret
const clientSecret = '<client secret>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);
const receiptApi = new fns.ReceiptApi(axiosInstance);

const fiscalData: fns.FiscalData = {
  date: '2021-06-14T14:32',
  operationType: 1,
  sum: 43600,
  fsId: '9982450301247855',
  documentId: 65724,
  fiscalSign: '7634185632'
};

async function run() {
  // Login
  const loginResponse = await loginApi.loginLKFL({
    inn,
    password,
    client_secret: clientSecret
  });
  const sessionId = loginResponse.data.sessionId;
  receiptApi.setSessionId(sessionId);

  // Add receipt
  const addReceiptResponse = await receiptApi.addReceipt({
    fiscalData,
    sendToEmail: false
  });
  const receiptId = addReceiptResponse.data.id;

  // Periodically make requests
  const receiptDetailsResponse = await receiptApi.getReceipt(receiptId);
  const receiptStatus = receiptDetailsResponse.data.status;

  if (
    (ReceiptStatus.NPD_FOUND.includes(receiptStatus) ||
      ReceiptStatus.HAVE_COPY.includes(receiptStatus)) &&
    receiptDetailsResponse.data.ticket
  ) {
    console.log(receiptDetailsResponse.data.ticket);
  }
}

run().catch((e) => console.error(e));
