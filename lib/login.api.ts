import type { AxiosInstance, AxiosResponse, CancelToken } from 'axios';

export class LoginApi {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  getUrlOAuthEsia(cancelToken?: CancelToken): Promise<AxiosResponse<any>> {
    return this.axiosInstance.get<any>('v2/mobile/users/esia/auth/url', {
      cancelToken
    });
  }
}
