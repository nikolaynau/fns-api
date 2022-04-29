import axios from 'axios';
import * as fns from '..';

const sessionId = '<your session id>';

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
  .then(response => console.log(response.data))
  .catch(e => console.error(e));
