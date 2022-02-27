import type { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
import type {
  EsiaLoginRequest,
  EsiaUrlResponse,
  LKFLLoginRequest,
  LoginApiInterface,
  LoginResponse,
  PhoneLoginRequest,
  PhoneVerifyRequest,
  RefreshTokensRequest,
  RefreshTokensResponse
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

  loginEsia(
    data: EsiaLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, EsiaLoginRequest>> {
    return this.axiosInstance.post('v2/mobile/users/esia/auth', data, {
      cancelToken
    });
  }

  loginLKFL(
    data: LKFLLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, LKFLLoginRequest>> {
    return this.axiosInstance.post('v2/mobile/users/lkfl/auth', data, {
      cancelToken
    });
  }

  loginByPhone(
    data: PhoneLoginRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<void, PhoneLoginRequest>> {
    return this.axiosInstance.post('v2/auth/phone/request', data, {
      cancelToken
    });
  }

  verifyPhone(
    data: PhoneVerifyRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<LoginResponse, PhoneVerifyRequest>> {
    return this.axiosInstance.post('v2/auth/phone/verify', data, {
      cancelToken
    });
  }

  refreshTokens(
    data: RefreshTokensRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<RefreshTokensResponse, RefreshTokensRequest>> {
    return this.axiosInstance.post('v2/mobile/users/refresh', data, {
      cancelToken
    });
  }
}
