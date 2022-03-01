# Receipt API Specification

- [B-1. Add receipt by fiscal data](#b-1-add-receipt-by-fiscal-data)
- [B-2. Add receipt by QR-code data](#b-2-add-receipt-by-qr-code-data)
- [B-3. Get receipt details by id](#b-3-get-receipt-details-by-id)
- [B-4. Get receipt list with short info](#b-4-get-receipt-list-with-short-info)
- [B-5. Delete receipt by id](#b-5-delete-receipt-by-id)

## **B-1. Add receipt by fiscal data**

`POST v2/ticket`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name              | Belong | Type                                                   | Description   |
| --- | ----------------- | ------ | ------------------------------------------------------ | ------------- |
| \*  | AddReceiptRequest | Body   | [AddReceiptRequest](./data-model.md#AddReceiptRequest) | Request data. |

#### Successful Response (Code: `200 OK`)

| Req | Name         | Type                                         | Description                                         |
| --- | ------------ | -------------------------------------------- | --------------------------------------------------- |
| \*  | ReceiptShort | [ReceiptShort](./data-model.md#ReceiptShort) | Response data containing short receipt information. |

#### **Errors**

| Code                        | Type   | Description                                   |
| --------------------------- | ------ | --------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters.                   |
| **401 Unauthorized**        | string | Authorization required.                       |
| **429 Too Many Requests**   | string | Daily limit exceeded.                         |
| **500 Server Error**        | string | The server was unable to process the request. |
| **503 Service Unavailable** | string | Service is temporarily unavailable.           |

## **B-2. Add receipt by QR-code data**

`POST v2/ticket`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name                | Belong | Type                                                       | Description   |
| --- | ------------------- | ------ | ---------------------------------------------------------- | ------------- |
| \*  | AddReceiptQRRequest | Body   | [AddReceiptQRRequest](./data-model.md#AddReceiptQRRequest) | Request data. |

#### Successful Response (Code: `200 OK`)

| Req | Name         | Type                                         | Description                                         |
| --- | ------------ | -------------------------------------------- | --------------------------------------------------- |
| \*  | ReceiptShort | [ReceiptShort](./data-model.md#ReceiptShort) | Response data containing short receipt information. |

#### **Errors**

| Code                        | Type   | Description                                   |
| --------------------------- | ------ | --------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters.                   |
| **401 Unauthorized**        | string | Authorization required.                       |
| **429 Too Many Requests**   | string | Daily limit exceeded.                         |
| **500 Server Error**        | string | The server was unable to process the request. |
| **503 Service Unavailable** | string | Service is temporarily unavailable.           |

## **B-3. Get receipt details by id**

`GET v2/tickets/{id}`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name | Belong | Type | Description |
| --- | ---- | ------ | ---- | ----------- |
| \*  | id   | Path   | long | Receipt id  |

#### Successful Response (Code: `200 OK`)

| Req | Name           | Type                                             | Description                                                 |
| --- | -------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| \*  | ReceiptDetails | [ReceiptDetails](./data-model.md#ReceiptDetails) | Response data containing details information about receipt. |

#### **Errors**

| Code                        | Type   | Description                                   |
| --------------------------- | ------ | --------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters.                   |
| **404 Not Found**           | string | Receipt with this id not found.               |
| **401 Unauthorized**        | string | Authorization required.                       |
| **500 Server Error**        | string | The server was unable to process the request. |
| **503 Service Unavailable** | string | Service is temporarily unavailable.           |

## **B-4. Get receipt list with short info**

`GET v2/tickets`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

**No**

#### Successful Response (Code: `200 OK`)

| Req | Name                | Type                                                  | Description                                |
| --- | ------------------- | ----------------------------------------------------- | ------------------------------------------ |
| \*  | ReceiptListResponse | Array\<[ReceiptShort](./data-model.md#ReceiptShort)\> | Response data containing list of receipts. |

#### **Errors**

| Code                        | Type   | Description                                   |
| --------------------------- | ------ | --------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters.                   |
| **401 Unauthorized**        | string | Authorization required.                       |
| **500 Server Error**        | string | The server was unable to process the request. |
| **503 Service Unavailable** | string | Service is temporarily unavailable.           |

## **B-5. Delete receipt by id**

`DELETE v2/tickets/{id}`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name | Belong | Type | Description         |
| --- | ---- | ------ | ---- | ------------------- |
| \*  | id   | Path   | long | Receipt identifier. |

#### Successful Response (Code: `200 OK`)

Receipt successfully deleted.

#### **Errors**

| Code                        | Type   | Description                                   |
| --------------------------- | ------ | --------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters.                   |
| **401 Unauthorized**        | string | Authorization required.                       |
| **500 Server Error**        | string | The server was unable to process the request. |
| **503 Service Unavailable** | string | Service is temporarily unavailable.           |
