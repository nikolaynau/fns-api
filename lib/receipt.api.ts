import type { AxiosInstance, AxiosResponse, CancelToken } from 'axios';
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
    private sessionId: string
  ) {}

  setSessionId(value: string): void {
    this.sessionId = value;
  }

  addReceipt(
    data: AddReceiptRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptRequest>> {
    return this.axiosInstance.post('v2/ticket', data, {
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }

  addReceiptQR(
    data: AddReceiptQRRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptQRRequest>> {
    return this.axiosInstance.post('v2/ticket', data, {
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }

  getReceipt(
    id: string,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptDetails, any>> {
    return this.axiosInstance.get(`v2/tickets/${encodeURIComponent(id)}`, {
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }

  getReceipts(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort[], any>> {
    return this.axiosInstance.get('v2/tickets', {
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }

  removeReceipt(id: string, cancelToken?: CancelToken): Promise<AxiosResponse> {
    return this.axiosInstance.delete(`v2/tickets/${encodeURIComponent(id)}`, {
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }

  validateReceipt(
    date: string,
    operationType: number,
    sum: number,
    fsId: string,
    documentId: number,
    fiscalSign: number,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse> {
    return this.axiosInstance.get('v2/check/ticket', {
      params: {
        date,
        operationType,
        sum,
        fsId,
        documentId,
        fiscalSign
      },
      headers: { [SESSION_ID_HEADER]: this.sessionId },
      cancelToken
    });
  }
}
