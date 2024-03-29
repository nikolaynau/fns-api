import 'dotenv/config';
import axios from 'axios';
import { BASE_URL, defaultHeaders, LoginApi } from '../..';

const inn = process.env.TEST_INN as string;
const password = process.env.TEST_PASSWORD as string;
const clientSecret = process.env.TEST_CLIENT_SECRET as string;

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

  it('loginLKFL', async () => {
    const response = await loginApi.loginLKFL({
      inn,
      password,
      client_secret: clientSecret
    });
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data).not.toBeNull();
    expect(typeof response.data.sessionId).toBe('string');
    expect(typeof response.data.refresh_token).toBe('string');
    expect(response.data.sessionId).not.toBe('');
    expect(response.data.refresh_token).not.toBe('');
  });
});
