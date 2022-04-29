import axios from 'axios';
import * as fns from '..';

// Your phone
const phone = '+71234567890';
// Google captcha code
const captcha = '<your captcha code>';
// Client secret
const clientSecret = '<client secret>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);

// Send verification code by sms
loginApi
  .loginByPhone({ phone, captcha, os: 'android', client_secret: clientSecret })
  .then(response => console.log(response.data))
  .catch(e => console.error(e));

const code = '<Your verification code from sms>';

// Get tokens
loginApi
  .verifyPhone({ phone, code, client_secret: clientSecret })
  .then(response => console.log(response.data))
  .catch(e => console.error(e));
