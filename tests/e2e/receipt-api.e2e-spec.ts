import 'dotenv/config';
import axios from 'axios';
import {
  AddReceiptQRRequest,
  AddReceiptRequest,
  BASE_URL,
  defaultHeaders,
  FiscalData,
  LoginApi,
  Receipt,
  ReceiptApi,
  ReceiptDetails,
  ReceiptKind,
  ReceiptShort
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

  it('getReceipts', async () => {
    const addResponse = await receiptApi.addReceiptQR({ qr: qrData });
    expect(addResponse.status).toBe(200);
    expectIsDefined(addResponse.data);
    expectNotEmptyString(addResponse.data.id);
    const addedReceiptId = addResponse.data.id;

    const response = await receiptApi.getReceipts();
    expect(response.status).toBe(200);
    expectIsDefined(response.data);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length > 0).toBe(true);

    const receipt = response.data.find(
      (r) => r.id === addedReceiptId
    ) as ReceiptShort;
    expectIsDefined(receipt);

    expectReceiptShort(receipt);
  });

  it('removeReceipt', async () => {
    const addResponse = await receiptApi.addReceiptQR({ qr: qrData });
    expect(addResponse.status).toBe(200);
    expectIsDefined(addResponse.data);
    expectNotEmptyString(addResponse.data.id);
    const addedReceiptId = addResponse.data.id;

    const initResponse = await receiptApi.getReceipts();
    const initReceiptsLength = initResponse.data.length;
    expect(initReceiptsLength > 0).toBe(true);
    const receiptToRemove = initResponse.data.find(
      (r) => r.id === addedReceiptId
    ) as ReceiptShort;
    expectIsDefined(receiptToRemove);

    const resultResponse = await receiptApi.removeReceipt(receiptToRemove.id);
    expect(resultResponse.status).toBe(200);

    const actualResponse = await receiptApi.getReceipts();
    const actualReceiptsLength = actualResponse.data.length;

    expect(actualReceiptsLength < initReceiptsLength).toBe(true);
    expect(Array.isArray(actualResponse.data)).toBe(true);
    expect(
      actualResponse.data.find((r) => r.id === receiptToRemove.id)
    ).toBeUndefined();
  });

  it('getReceipt', async () => {
    const addResponse = await receiptApi.addReceiptQR({ qr: qrData });
    expect(addResponse.status).toBe(200);
    expectIsDefined(addResponse.data);
    expectNotEmptyString(addResponse.data.id);
    const addedReceiptId = addResponse.data.id;

    const resultResponse = await receiptApi.getReceipt(addedReceiptId);
    expect(resultResponse.status).toBe(200);
    expectIsDefined(resultResponse.data);
    const actualReceipt = resultResponse.data;

    expectReceiptShort(actualReceipt);
    expectReceiptDetails(actualReceipt);
  });
});

function expectNotEmptyString(actual: unknown) {
  expect(typeof actual).toBe('string');
  expect(actual).not.toBe('');
}

function expectIsDefined(actual: unknown) {
  expect(actual).toBeDefined();
  expect(actual).not.toBeNull();
}

function expectIsNumber(actual: unknown) {
  expect(typeof actual).toBe('number');
}

function expectReceiptShort(receipt: ReceiptShort) {
  expect(receipt.kind).toBe(ReceiptKind.KKT);
  expectIsNumber(receipt.status);

  expectNotEmptyString(receipt.id);
  expectNotEmptyString(receipt.createdAt);
  expectNotEmptyString(receipt.qr);

  expectIsDefined(receipt.operation);
  expectNotEmptyString(receipt.operation?.date);
  expectIsNumber(receipt.operation?.type);
  expectIsNumber(receipt.operation?.sum);

  expectIsDefined(receipt.query);
  expectIsNumber(receipt.query?.operationType);
  expectIsNumber(receipt.query?.sum);
  expectIsNumber(receipt.query?.documentId);
  expectNotEmptyString(receipt.query?.fsId);
  expectNotEmptyString(receipt.query?.fiscalSign);
  expectNotEmptyString(receipt.query?.date);

  expectIsDefined(receipt.organization);
  expectNotEmptyString(receipt.organization?.name);
  expectNotEmptyString(receipt.organization?.inn);

  expectIsDefined(receipt.seller);
  expectNotEmptyString(receipt.seller?.name);
  expectNotEmptyString(receipt.seller?.inn);
}

function expectReceiptDetails(receiptDetails: ReceiptDetails) {
  expectIsDefined(receiptDetails.ticket);
  expectIsDefined(receiptDetails.ticket?.document);
  expectIsDefined(receiptDetails.ticket?.document.receipt);
  const receipt = receiptDetails.ticket?.document.receipt as Receipt;
  expectIsNumber(receipt.dateTime);
  expectIsNumber(receipt.totalSum);
  expectIsNumber(receipt.cashTotalSum);
  expectIsNumber(receipt.ecashTotalSum);
  expectIsNumber(receipt.prepaidSum);
  expectIsNumber(receipt.provisionSum);
  expectIsNumber(receipt.nds10);
  expectIsNumber(receipt.nds18);
  expectNotEmptyString(receipt.fiscalDriveNumber);
  expectIsNumber(receipt.fiscalDocumentNumber);
  expectIsNumber(receipt.fiscalSign);
  expectNotEmptyString(receipt.fnsUrl);
  expect(Array.isArray(receipt.items)).toBe(true);
  expect(receipt.items.length > 0).toBe(true);
  const receiptItem = receipt.items[0];
  expectIsDefined(receiptItem);

  expectNotEmptyString(receiptItem.name);
  expectIsNumber(receiptItem.nds);
  expectIsNumber(receiptItem.price);
  expectIsNumber(receiptItem.quantity);
  expectIsNumber(receiptItem.sum);
  expectIsNumber(receiptItem.productType);
  expectIsNumber(receiptItem.paymentType);

  expectNotEmptyString(receipt.kktRegId);
  expectIsNumber(receipt.operationType);
  expectNotEmptyString(receipt.operator);
  expectNotEmptyString(receipt.operatorInn);
  expectIsNumber(receipt.requestNumber);
  expectIsNumber(receipt.shiftNumber);
  expectIsNumber(receipt.taxationType);
  expectNotEmptyString(receipt.user);
  expectNotEmptyString(receipt.userInn);
  expectNotEmptyString(receipt.retailPlace);
  expectNotEmptyString(receipt.retailPlaceAddress);
}
