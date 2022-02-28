import axios from 'axios';
import * as fns from '..';

const sessionId = '<your session id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

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

// or add receipt by QR-data

const qr = '<your qr data scanned from the receipt>';

receiptApi
  .addReceiptQR({ qr })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
