import type { AxiosResponse, CancelToken } from 'axios';

export interface LoginApiInterface {
  getUrlOAuthEsia(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<EsiaUrlResponse>>;
}

export interface EsiaUrlResponse {
  url: string;
}
