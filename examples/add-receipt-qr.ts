import axios from 'axios';
import * as fns from '..';

const sessionId = '<your session id>';
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
