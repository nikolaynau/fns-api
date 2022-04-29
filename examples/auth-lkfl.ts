import axios from 'axios';
import * as fns from '..';

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
  .then(response => console.log(response.data))
  .catch(e => console.error(e));
