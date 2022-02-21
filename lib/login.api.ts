import type { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import type {
  EsiaUrlResponse,
  LoginApiInterface
} from './interfaces/login-api.interface';

export class LoginApi implements LoginApiInterface {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  getUrlOAuthEsia(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<EsiaUrlResponse>> {
    return this.axiosInstance.get('v2/mobile/users/esia/auth/url', {
      cancelToken
    });
  }
}
