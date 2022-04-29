import axios from 'axios';
import * as fns from '..';

const receiptToRemove = '<your receipt id>';
const sessionId = '<your session id>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const receiptApi = new fns.ReceiptApi(axiosInstance, sessionId);

receiptApi
  .removeReceipt(receiptToRemove)
  .then(response => console.log(response.status))
  .catch(e => console.error(e));
