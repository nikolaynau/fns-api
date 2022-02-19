import type { AxiosResponse, CancelToken } from 'axios';

export interface LoginApiInterface {
  getUrlOAuthEsia(cancelToken?: CancelToken): Promise<AxiosResponse<GetUrlOAuthEsiaResponse>>;
}

export interface GetUrlOAuthEsiaResponse {
  url: string;
}
