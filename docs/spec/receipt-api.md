# Receipt API Specification

- [B-1. Send request for get receipt](#b-1-send-request-for-get-receipt)
- [B-2. Send request for get receipt by QR-code data](#b-2-send-request-for-get-receipt-by-qr-code-data)
- [B-3. Get receipt details by id](#b-3-get-receipt-details-by-id)
- [B-4. Get receipt list with short information](#b-4-get-receipt-list-with-short-information)
- [B-5. Delete receipt by id](#b-5-delete-receipt-by-id)
- [B-6. Check receipt exists with fiscal data](#b-6-check-receipt-exists-with-fiscal-data)

## **B-1. Send request for get receipt**

`POST v2/ticket`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name              | Belong | Type                                                   | Description  |
| --- | ----------------- | ------ | ------------------------------------------------------ | ------------ |
| \*  | AddReceiptRequest | Body   | [AddReceiptRequest](./data-model.md#AddReceiptRequest) | Request data |

#### Successful Response (Code: `200 OK`)

| Req | Name             | Type                                             | Description                                        |
| --- | ---------------- | ------------------------------------------------ | -------------------------------------------------- |
| \*  | ReceiptShortInfo | [ReceiptShort](./data-model.md#ReceiptShortInfo) | Response data containing short receipt information |

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **429 Too Many Requests**   | string | Daily amount limit exceeded                  |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |

## **B-2. Send request for get receipt by QR-code data**

`POST v2/ticket`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name                | Belong | Type                                                       | Description  |
| --- | ------------------- | ------ | ---------------------------------------------------------- | ------------ |
| \*  | AddReceiptQRRequest | Body   | [AddReceiptQRRequest](./data-model.md#AddReceiptQRRequest) | Request data |

#### Successful Response (Code: `200 OK`)

| Req | Name             | Type                                                 | Description                                        |
| --- | ---------------- | ---------------------------------------------------- | -------------------------------------------------- |
| \*  | ReceiptShortInfo | [ReceiptShortInfo](./data-model.md#ReceiptShortInfo) | Response data containing short receipt information |

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **429 Too Many Requests**   | string | Daily amount limit exceeded                  |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |

## **B-3. Get receipt details by id**

`GET v2/ticket/{id}`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name | Belong | Type | Description |
| --- | ---- | ------ | ---- | ----------- |
| \*  | id   | Path   | long | Receipt id  |

#### Successful Response (Code: `200 OK`)

| Req | Name           | Type                                             | Description                                                |
| --- | -------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| \*  | ReceiptDetails | [ReceiptDetails](./data-model.md#ReceiptDetails) | Response data containing details information about receipt |

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |

## **B-4. Get receipt list with short information**

`GET v2/tickets`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

**No**

#### Successful Response (Code: `200 OK`)

| Req | Name                | Type                                                          | Description                               |
| --- | ------------------- | ------------------------------------------------------------- | ----------------------------------------- |
| \*  | ReceiptListResponse | Array\<[ReceiptShortInfo](./data-model.md#ReceiptShortInfo)\> | Response data containing list of receipts |

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |

## **B-5. Delete receipt by id**

`DELETE v2/tickets/{id}`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name | Belong | Type | Description |
| --- | ---- | ------ | ---- | ----------- |
| \*  | id   | Path   | long | Receipt id  |

#### Successful Response (Code: `204 No Content`)

Receipt successfully deleted.

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |

## **B-6. Check receipt exists with fiscal data**

`GET v2/check/ticket`

Authorization is required. More [here](./general-spec.md#authorization).

#### **Request Parameters**

| Req | Name          | Belong | Type   | Description                                                                                                                                |
| --- | ------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| \*  | date          | Query  | string | Date from receipt. The date format is `yyyy-MM-dd'T'HH:mm:ss`, seconds are optional, they can be reset to zero. E.g. `2018-05-17T17:57:00` |
| \*  | operationType | Query  | int    | Operation type (sale, purchase, etc.). See [OperationType](./data-model.md#OperationType)                                                  |
| \*  | sum           | Query  | long   | Total amount from the receipt in minimum monetary units                                                                                    |
| \*  | fsId          | Query  | string | FN number (Fiscal Number) 16-digit. E.g. `8710000100518392`                                                                                |
| \*  | documentId    | Query  | long   | FD number (Fiscal Document) up to 10 digits. E.g. `54812`                                                                                  |
| \*  | fiscalSign    | Query  | long   | FP number (Fiscal Sign of the Document) up to 10 digits. E.g. `3522207165`                                                                 |

#### Successful Response (Code: `204 No Content`)

This receipt is valid.

#### **Errors**

| Code                        | Type   | Description                                  |
| --------------------------- | ------ | -------------------------------------------- |
| **400 Bad Request**         | string | Invalid request parameters                   |
| **401 Unauthorized**        | string | Authorization required                       |
| **500 Server Error**        | string | The server was unable to process the request |
| **503 Service Unavailable** | string | Service is temporarily unavailable           |
