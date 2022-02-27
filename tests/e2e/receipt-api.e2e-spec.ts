import 'dotenv/config';
import axios from 'axios';
import {
  AddReceiptQRRequest,
  AddReceiptRequest,
  BASE_URL,
  defaultHeaders,
  FiscalData,
  LoginApi,
  ReceiptApi,
  ReceiptKind
} from '../..';

const inn = process.env.TEST_INN as string;
const password = process.env.TEST_PASSWORD as string;
const clientSecret = process.env.TEST_CLIENT_SECRET as string;
const fiscalData = JSON.parse(
  process.env.TEST_FISCAL_DATA as string
) as FiscalData;
const qrData = process.env.TEST_QR_DATA as string;

describe('ReceiptApi (e2e)', () => {
  let loginApi: LoginApi;
  let receiptApi: ReceiptApi;

  beforeAll(async () => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: defaultHeaders
    });

    loginApi = new LoginApi(axiosInstance);
    const loginResponse = await loginApi.loginLKFL({
      inn,
      password,
      client_secret: clientSecret
    });

    const { sessionId } = loginResponse.data;
    receiptApi = new ReceiptApi(axiosInstance, sessionId);
  });

  it('addReceipt', async () => {
    const data: AddReceiptRequest = {
      fiscalData,
      sendToEmail: false
    };
    const response = await receiptApi.addReceipt(data);
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data).not.toBeNull();
    expect(response.data.kind).toBe(ReceiptKind.KKT);
    expect(typeof response.data.status).toBe('number');
    expect(typeof response.data.id).toBe('string');
    expect(response.data.id).not.toBe('');
  });

  it('addReceiptQR', async () => {
    const data: AddReceiptQRRequest = {
      qr: qrData
    };
    const response = await receiptApi.addReceiptQR(data);
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data).not.toBeNull();
    expect(response.data.kind).toBe(ReceiptKind.KKT);
    expect(typeof response.data.status).toBe('number');
    expect(typeof response.data.id).toBe('string');
    expect(response.data.id).not.toBe('');
  });
});
