import type { AxiosResponse, CancelToken } from 'axios';

export interface LoginApiInterface {
  getUrlOAuthEsia(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<EsiaUrlResponse>>;

  loginEsia(
    data: EsiaLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, EsiaLoginRequest>>;

  loginFKFL(
    data: FLLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, FLLoginRequest>>;

  loginByPhone(
    data: PhoneLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<void, PhoneLoginRequest>>;

  verifyPhone(
    data: PhoneVerifyRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, PhoneVerifyRequest>>;

  refreshTokens(
    data: RefreshTokensRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<RefreshTokensResponse, RefreshTokensRequest>>;
}

export interface EsiaUrlResponse {
  url: string;
}

export interface EsiaLoginRequest {
  authorization_code: string;
  state: string;
  client_secret: string;
}

export interface FLLoginRequest {
  inn: string;
  password: string;
  client_secret: string;
}

export interface PhoneLoginRequest {
  phone: string;
  captcha: string;
  os: 'android' | 'ios';
  client_secret: string;
}

export interface PhoneVerifyRequest {
  phone: string;
  code: string;
  client_secret: string;
}

export interface LoginResponse {
  sessionId: string;
  refresh_token: string;
  email?: string;
  name?: string;
  phone?: string;
  region?: string;
  surname?: string;
}

export interface RefreshTokensRequest {
  refresh_token: string;
  client_secret: string;
}

export interface RefreshTokensResponse {
  sessionId: string;
  refresh_token: string;
}
