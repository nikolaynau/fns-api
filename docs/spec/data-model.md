# Data Model

## EsiaUrlResponse

| Req | Name | Type   | Description                                                |
| --- | ---- | ------ | ---------------------------------------------------------- |
| \*  | url  | string | Url to login via external Esia provider, that uses OAuth2. |

## EsiaLoginRequest

| Req | Name               | Type   | Description                                                                                                   |
| --- | ------------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| \*  | authorization_code | string | The authorization code is a temporary code that the client will exchange for an access token. Used in OAuth2. |
| \*  | state              | string | The state parameter is used to protect against XSRF in OAuth2 flow.                                           |
| \*  | client_secret      | string | [Client secret](./terms.md#client-secret)                                                                     |

## FLLoginRequest

| Req | Name          | Type   | Description                                                         |
| --- | ------------- | ------ | ------------------------------------------------------------------- |
| \*  | inn           | string | Tax identification number. Used when logging in through the FNS LK. |
| \*  | password      | string | FNS LK password.                                                    |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret)                           |

## PhoneLoginRequest

| Req | Name          | Type   | Description                               |
| --- | ------------- | ------ | ----------------------------------------- |
| \*  | phone         | string | Your phone number.                        |
| \*  | captcha       | string | Google captcha key.                       |
| \*  | os            | string | Value: `android` or `ios`.                |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret) |

## PhoneVerifyRequest

| Req | Name          | Type   | Description                               |
| --- | ------------- | ------ | ----------------------------------------- |
| \*  | phone         | string | Your phone number.                        |
| \*  | code          | string | Verification code sent to you by SMS.     |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret) |

## LoginResponse

| Req    | Name          | Type   | Description                                                                                        |
| ------ | ------------- | ------ | -------------------------------------------------------------------------------------------------- |
| &nbsp; | email         | string | Email address provided during registration (optional).                                             |
| &nbsp; | name          | string | Your name provided during registration (optional).                                                 |
| &nbsp; | phone         | string | Your phone number (optional).                                                                      |
| &nbsp; | region        | string | Your region (optional).                                                                            |
| &nbsp; | surname       | string | Your surname (optional).                                                                           |
| \*     | sessionId     | string | [Access token](./terms.md#access-token). Used in [authorization](./general-spec.md#authorization). |
| \*     | refresh_token | string | [Refresh token](./terms.md#refresh-token)                                                          |

## RefreshTokensRequest

| Req | Name          | Type   | Description                               |
| --- | ------------- | ------ | ----------------------------------------- |
| \*  | refresh_token | string | [Refresh token](./terms.md#refresh-token) |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret) |

## RefreshTokensResponse

| Req | Name          | Type   | Description                                                                                        |
| --- | ------------- | ------ | -------------------------------------------------------------------------------------------------- |
| \*  | sessionId     | string | [Access token](./terms.md#access-token). Used in [authorization](./general-spec.md#authorization). |
| \*  | refresh_token | string | [Refresh token](./terms.md#refresh-token)                                                          |

## AddReceiptRequest

| Req | Name        | Type                      | Description                                            |
| --- | ----------- | ------------------------- | ------------------------------------------------------ |
| \*  | fiscalData  | [FiscalData](#fiscaldata) | Fiscal data.                                           |
| \*  | sendToEmail | boolean                   | Specify `true` if you want to send a receipt by email. |

## AddReceiptQRRequest

| Req | Name | Type   | Description                                                                                      |
| --- | ---- | ------ | ------------------------------------------------------------------------------------------------ |
| \*  | qr   | string | The string contains the data from the qr-code on the receipt. More [here](./receipt-qr-code.md). |

## ReceiptShort

| Req    | Name         | Type                          | Description                                                                                      |
| ------ | ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| \*     | id           | string                        | Unique receipt identifier.                                                                       |
| \*     | status       | int                           | Receipt request processing status. See [ReceiptStatus](#receiptstatus).                          |
| \*     | kind         | string                        | Available string: `kkt` or `npd`. See [ReceiptKind](#receiptkind).                               |
| &nbsp; | createdAt    | string                        | Receipt request creation time in the format ISO8601. E.g. `2022-02-22T16:59:35+03:00`.           |
| &nbsp; | qr           | string                        | The string contains the data from the qr-code on the receipt. More [here](./receipt-qr-code.md). |
| &nbsp; | operation    | [Operation](#operation)       | Transaction information.                                                                         |
| &nbsp; | query        | [ReceiptQuery](#receiptquery) | Receipt fiscal data.                                                                             |
| &nbsp; | organization | [Organization](#organization) | Information about the organization, if the receipt was received (optional).                      |
| &nbsp; | seller       | [Seller](#seller)             | Information about the seller, if the receipt was received (optional).                            |

## ReceiptDetails

| Req    | Name         | Type                          | Description                                                                                      |
| ------ | ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| \*     | id           | string                        | Unique receipt identifier.                                                                       |
| \*     | status       | int                           | Receipt request processing status. See [ReceiptStatus](#receiptstatus).                          |
| \*     | kind         | string                        | Available string: `kkt` or `npd`. See [ReceiptKind](#receiptkind).                               |
| \*     | createdAt    | string                        | Receipt request creation time in the format ISO8601. E.g. `2022-02-22T16:59:35+03:00`.           |
| \*     | qr           | string                        | The string contains the data from the qr-code on the receipt. More [here](./receipt-qr-code.md). |
| \*     | operation    | [Operation](#operation)       | Transaction information.                                                                         |
| \*     | query        | [ReceiptQuery](#receiptquery) | Receipt fiscal data.                                                                             |
| &nbsp; | ticket       | [Document](#document)         | Information about the receipt, if it was received (optional).                                    |
| &nbsp; | organization | [Organization](#organization) | Information about the organization, if the receipt was received (optional).                      |
| &nbsp; | seller       | [Seller](#seller)             | Information about the seller, if the receipt was received (optional).                            |

## Document

| Req | Name     | Type                                | Description       |
| --- | -------- | ----------------------------------- | ----------------- |
| \*  | document | [ReceiptDocument](#receiptdocument) | Receipt document. |

## ReceiptDocument

| Req | Name    | Type                | Description   |
| --- | ------- | ------------------- | ------------- |
| \*  | receipt | [Receipt](#receipt) | Receipt data. |

## Operation

| Req | Name | Type   | Description                                                                                                                                 |
| --- | ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| \*  | date | string | Date from receipt. The date format is `yyyy-MM-dd'T'HH:mm:ss`, seconds are optional, they can be reset to zero. E.g. `2018-05-17T17:57:00`. |
| \*  | type | int    | Operation type (sale, purchase, etc.). See [OperationType](#operationtype).                                                                 |
| \*  | sum  | long   | Total sum from the receipt, in minimum money units.                                                                                         |

## Organization

| Req | Name | Type   | Description               |
| --- | ---- | ------ | ------------------------- |
| \*  | name | string | Name of the organization. |
| \*  | inn  | string | INN of the organization.  |

## Seller

| Req | Name | Type   | Description               |
| --- | ---- | ------ | ------------------------- |
| \*  | name | string | Name of the organization. |
| \*  | inn  | string | INN of the organization.  |

## ReceiptStatus

| Name                      | Type         | Value      | Description |
| ------------------------- | ------------ | ---------- | ----------- |
| NPD_FOUND                 | Array\<int\> | [20]       |             |
| NPD_NOT_FOUND             | Array\<int\> | [422]      |             |
| COPY_REQUESTED            | Array\<int\> | [3,11]     |             |
| ERROR                     | Array\<int\> | [4]        |             |
| HAVE_COPY                 | Array\<int\> | [2]        |             |
| HSM_NOK                   | Array\<int\> | [8,10]     |             |
| HSM_REQUESTED             | Array\<int\> | [0,7,9]    |             |
| STANDALONE_CASH           | Array\<int\> | [12,13,15] |             |
| RETRIEVE_FAILED           | Array\<int\> | [5]        |             |
| UNSUPPORTED_DOCUMENT_TYPE | Array\<int\> | [16]       |             |

## OperationType

| Name           | Type | Value | Description                                      |
| -------------- | ---- | ----- | ------------------------------------------------ |
| UNKNOWN        | int  | 0     | Unknown                                          |
| INCOME         | int  | 1     | This most common, purchase of goods or services. |
| INCOME_RETURN  | int  | 2     | This means a return of a product or service.     |
| EXPENSE        | int  | 3     | Expense                                          |
| EXPENSE_RETURN | int  | 4     | Return expense                                   |

## ReceiptKind

| Name | Type   | Value | Description |
| ---- | ------ | ----- | ----------- |
| KKT  | string | "kkt" |             |
| NPD  | string | "npd" |             |

## TaxationType

| Name    | Type | Value | Description |
| ------- | ---- | ----- | ----------- |
| UNKNOWN | int  | 0     |             |
| OSN     | int  | 1     |             |
| ISN     | int  | 2     |             |
| EXT_USN | int  | 3     |             |
| ENVD    | int  | 8     |             |
| ESHN    | int  | 16    |             |
| PSN     | int  | 32    |             |

## ReceiptQuery

Alias for [FiscalData](#fiscaldata) type.

## FiscalData

| Req | Name          | Type   | Description                                                                                                                                 |
| --- | ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| \*  | date          | string | Date from receipt. The date format is `yyyy-MM-dd'T'HH:mm:ss`, seconds are optional, they can be reset to zero. E.g. `2018-05-17T17:57:00`. |
| \*  | operationType | int    | Operation type (sale, purchase, etc.). See [OperationType](#operationtype).                                                                 |
| \*  | sum           | long   | Total sum from the receipt, in minimum money units.                                                                                         |
| \*  | fsId          | string | FN number (Fiscal Number) 16-digit. E.g. `8710000100518392`.                                                                                |
| \*  | documentId    | string | FD number (Fiscal Document) up to 10 digits. E.g. `54812`.                                                                                  |
| \*  | fiscalSign    | string | FP number (Fiscal Sign of the Document) up to 10 digits. E.g. `3522207165`.                                                                 |

## Receipt

| Req    | Name                    | Type                                 | Description                                                                         |
| ------ | ----------------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| \*     | dateTime                | long                                 | Purchase date in timestamp. E.g. `1551000840`.                                      |
| \*     | totalSum                | long                                 | Total sum from the receipt, in minimum money units.                                 |
| \*     | cashTotalSum            | long                                 | Sum paid in cash, in minimum money units.                                           |
| \*     | ecashTotalSum           | long                                 | Sum paid by non-cash payment method, in minimum money units.                        |
| &nbsp; | creditSum               | long                                 | Credit sum, in minimum money units.                                                 |
| &nbsp; | prepaidSum              | long                                 | Prepayment sum, in minimum money units.                                             |
| &nbsp; | provisionSum            | long                                 | Provision sum, in minimum money units.                                              |
| &nbsp; | ndsNo                   | long                                 | Sum without VAT.                                                                    |
| &nbsp; | nds10                   | int                                  | VAT amount 10%                                                                      |
| &nbsp; | nds18                   | int                                  | VAT amount 18%                                                                      |
| &nbsp; | nds20                   | int                                  | VAT amount 20%                                                                      |
| \*     | fiscalDriveNumber       | string                               | FN number (Fiscal Number) 16-digit. E.g. `8710000100518392`.                        |
| &nbsp; | fiscalDocumentFormatVer | int                                  | Fiscal document number format version.                                              |
| \*     | fiscalDocumentNumber    | long                                 | FD number (Fiscal Document) up to 10 digits. E.g. `54812`.                          |
| \*     | fiscalSign              | long                                 | FP number (Fiscal Sign of the Document) up to 10 digits. E.g. `3522207165`.         |
| &nbsp; | fnsSite                 | string                               | Value: `nalog.ru`                                                                   |
| &nbsp; | internetSign            | int                                  |                                                                                     |
| \*     | items                   | Array\<[ReceiptItem](#receiptitem)\> | Producs / services involved in the operation.                                       |
| \*     | kktRegId                | string                               | Registration number of KKT.                                                         |
| &nbsp; | machineNumber           | string                               |                                                                                     |
| &nbsp; | messageFiscalSign       | long                                 |                                                                                     |
| \*     | operationType           | int                                  | Operation type (sale, purchase, etc.). See [OperationType](#operationtype).         |
| \*     | operator                | string                               | Data of the cashier who punched the receipt.                                        |
| &nbsp; | paymentAgentType        | int                                  |                                                                                     |
| &nbsp; | propertiesData          | string                               | User data.                                                                          |
| &nbsp; | propertiesUser          | [UserProperty](#userproperty)        | User data.                                                                          |
| \*     | receiptCode             | int                                  | Receipt code.                                                                       |
| \*     | requestNumber           | int                                  | Request number.                                                                     |
| \*     | shiftNumber             | int                                  | Shift number.                                                                       |
| \*     | taxationType            | int                                  | Type of taxation system. See [TaxationType](#taxationtype).                         |
| \*     | user                    | string                               | Seller name.                                                                        |
| \*     | userInn                 | string                               | INN of the seller.                                                                  |
| &nbsp; | retailPlaceAddress      | string                               | Point of sale address.                                                              |
| &nbsp; | retailPlace             | string                               | Retail place.                                                                       |
| &nbsp; | sellerAddress           | string                               | Seller email address.                                                               |
| &nbsp; | buyerAddress            | string                               | Buyer information.                                                                  |
| &nbsp; | senderAddress           | string                               | E-mail address of the organization that sent information on the receipt to the FNS. |

## ReceiptItem

| Req    | Name        | Type   | Description                                           |
| ------ | ----------- | ------ | ----------------------------------------------------- |
| \*     | name        | string | Name of item in the receipt.                          |
| \*     | quantity    | double | Quantity of item.                                     |
| \*     | price       | long   | Price of item, in minimum money units.                |
| \*     | sum         | long   | Sum of item, in minimum money units.                  |
| &nbsp; | nds         | int    |                                                       |
| &nbsp; | ndsNo       | long   | Sum without VAT.                                      |
| &nbsp; | nds10       | int    | VAT amount 10%.                                       |
| &nbsp; | nds18       | int    | VAT amount 18%.                                       |
| &nbsp; | nds20       | int    | VAT amount 20%.                                       |
| &nbsp; | paymentType | int    | Payment type. More detailed information is not known. |
| &nbsp; | providerInn | string | INN of the fiscal organization.                       |

## UserProperty

| Req | Name          | Type   | Description          |
| --- | ------------- | ------ | -------------------- |
| \*  | propertyName  | string | User property name.  |
| \*  | propertyValue | string | User property value. |
