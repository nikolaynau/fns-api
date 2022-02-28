import type {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  CancelToken
} from 'axios';
import {
  AddReceiptQRRequest,
  AddReceiptRequest,
  ReceiptApiInterface,
  ReceiptDetails,
  ReceiptShort
} from './interfaces';
import { SESSION_ID_HEADER } from './constants';

export class ReceiptApi implements ReceiptApiInterface {
  constructor(
    private readonly axiosInstance: AxiosInstance,
    private sessionId?: string
  ) {}

  setSessionId(value: string | undefined): void {
    this.sessionId = value;
  }

  addReceipt(
    data: AddReceiptRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptRequest>> {
    return this.axiosInstance.post('v2/ticket', data, {
      headers: { ...this.getSessionHeader() },
      cancelToken
    });
  }

  addReceiptQR(
    data: AddReceiptQRRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptQRRequest>> {
    return this.axiosInstance.post('v2/ticket', data, {
      headers: { ...this.getSessionHeader() },
      cancelToken
    });
  }

  getReceipt(
    id: string,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptDetails, any>> {
    return this.axiosInstance.get(`v2/tickets/${encodeURIComponent(id)}`, {
      headers: { ...this.getSessionHeader() },
      cancelToken
    });
  }

  getReceipts(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort[], any>> {
    return this.axiosInstance.get('v2/tickets', {
      headers: { ...this.getSessionHeader() },
      cancelToken
    });
  }

  removeReceipt(id: string, cancelToken?: CancelToken): Promise<AxiosResponse> {
    return this.axiosInstance.delete(`v2/tickets/${encodeURIComponent(id)}`, {
      headers: { ...this.getSessionHeader() },
      cancelToken
    });
  }

  private getSessionHeader(): AxiosRequestHeaders | undefined {
    if (this.sessionId !== undefined) {
      return { [SESSION_ID_HEADER]: this.sessionId };
    }
    return undefined;
  }
}
