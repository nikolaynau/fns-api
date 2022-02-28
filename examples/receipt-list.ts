import axios from 'axios';
import * as fns from '..';

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
