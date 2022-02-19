import axios from 'axios';
import * as fns from '..';

const axiosInstance = axios.create({ baseURL: fns.BASE_URL });
const loginApi = new fns.LoginApi(axiosInstance);

loginApi
  .getUrlOAuthEsia()
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
