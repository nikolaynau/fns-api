import type { AxiosResponse, CancelToken } from 'axios';

export interface ReceiptApiInterface {
  addReceipt(
    data: AddReceiptRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptRequest>>;

  addReceiptQR(
    data: AddReceiptQRRequest,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort, AddReceiptQRRequest>>;

  getReceipt(
    id: string,
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptDetails>>;

  getReceipts(
    cancelToken?: CancelToken
  ): Promise<AxiosResponse<ReceiptShort[]>>;

  removeReceipt(id: string, cancelToken?: CancelToken): Promise<AxiosResponse>;
}

export interface AddReceiptRequest {
  fiscalData: FiscalData;
  sendToEmail: boolean;
}

export interface AddReceiptQRRequest {
  qr: string;
}

export interface FiscalData {
  date: string;
  operationType: number;
  sum: number;
  fsId: string;
  documentId: string;
  fiscalSign: string;
}

export interface ReceiptShort {
  id: string;
  status: number;
  kind: ReceiptKind;
  createdAt?: string;
  qr?: string;
  operation?: Operation;
  query?: ReceiptQuery;
  organization?: Organization;
  seller?: Seller;
}

export interface ReceiptDetails extends ReceiptShort {
  ticket?: Document;
}

export interface Document {
  document: ReceiptDocument;
}

export interface ReceiptDocument {
  receipt: Receipt;
}

export interface Operation {
  date: string;
  type: number;
  sum: number;
}

export interface Organization {
  name: string;
  inn: string;
}

export interface Seller {
  name: string;
  inn: string;
}

export const ReceiptStatus = {
  NPD_FOUND: [20],
  NPD_NOT_FOUND: [422],
  COPY_REQUESTED: [3, 11],
  ERROR: [4],
  HAVE_COPY: [2],
  HSM_NOK: [8, 10],
  HSM_REQUESTED: [0, 7, 9],
  STANDALONE_CASH: [12, 13, 15],
  RETRIEVE_FAILED: [5],
  UNSUPPORTED_DOCUMENT_TYPE: [16]
} as const;

export enum OperationType {
  UNKNOWN = 0,
  INCOME = 1,
  INCOME_RETURN = 2,
  EXPENSE = 3,
  EXPENSE_RETURN = 4
}

export enum ReceiptKind {
  KKT = 'kkt',
  NPD = 'npd'
}

export enum TaxationType {
  UNKNOWN = 0,
  OSN = 1,
  ISN = 2,
  EXT_USN = 3,
  ENVD = 8,
  ESHN = 16,
  PSN = 32
}

export type ReceiptQuery = FiscalData;

export interface Receipt {
  dateTime: number;
  totalSum: number;
  cashTotalSum: number;
  ecashTotalSum: number;
  creditSum?: number;
  prepaidSum?: number;
  provisionSum?: number;
  ndsNo?: number;
  nds10?: number;
  nds18?: number;
  nds20?: number;
  fiscalDriveNumber: string;
  fiscalDocumentFormatVer?: number;
  fiscalDocumentNumber: number;
  fiscalSign: number;
  fnsUrl?: string;
  internetSign?: number;
  items: ReceiptItem[];
  kktRegId: string;
  machineNumber?: string;
  messageFiscalSign?: number;
  operationType: OperationType;
  operator: string;
  operatorInn?: string;
  paymentAgentType: number;
  propertiesData: string;
  propertiesUser?: UserProperty;
  receiptCode?: number;
  requestNumber: number;
  shiftNumber: number;
  taxationType: TaxationType;
  user: string;
  userInn: string;
  retailPlaceAddress?: string;
  retailPlace?: string;
  sellerAddress?: string;
  buyerAddress?: string;
  senderAddress?: string;
}

export interface ReceiptItem {
  name: string;
  quantity: number;
  price: number;
  sum: number;
  nds?: number;
  ndsNo?: number;
  nds10?: number;
  nds18?: number;
  nds20?: number;
  paymentType?: number;
  providerInn?: string;
  productType?: number;
}

export interface UserProperty {
  propertyName: string;
  propertyValue: string;
}
