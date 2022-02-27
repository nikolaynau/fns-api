import axios from 'axios';
import * as fns from '..';

const refreshToken = '<your refresh token>';
const clientSecret = '<client secret>';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);

loginApi
  .refreshTokens({ refresh_token: refreshToken, client_secret: clientSecret })
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
