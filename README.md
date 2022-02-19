# fns-api

> Methods of working with FNS API.

## Installation

```bash
npm install fns-api axios
```

## Usage

```js
// App.js
import axios from 'axios';
import * as fns from 'fns-api';

const axiosInstance = axios.create({
  baseURL: fns.BASE_URL,
  headers: fns.defaultHeaders
});
const loginApi = new fns.LoginApi(axiosInstance);

loginApi
  .getUrlOAuthEsia()
  .then((response) => console.log(response.data))
  .catch((e) => console.error(e));
```

## License

Licensed under the [MIT License](./LICENSE).
