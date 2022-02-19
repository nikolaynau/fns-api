import axios from 'axios';
import { BASE_URL, defaultHeaders, LoginApi } from '../..';

describe('LoginApi (e2e)', () => {
  let loginApi: LoginApi;

  beforeEach(() => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: defaultHeaders
    });
    loginApi = new LoginApi(axiosInstance);
  });

  it('getUrlOAuthEsia', async () => {
    const response = await loginApi.getUrlOAuthEsia();
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data).not.toBeNull();
    expect(response.data.url).toMatch('esia.gosuslugi.ru/aas/oauth2/ac');
  });
});
