# Data Model

## OperationType

| Name          | Type | Value | Description                                      |
| ------------- | ---- | ----- | ------------------------------------------------ |
| Unknown       | int  | 0     | Unknown                                          |
| Income        | int  | 1     | This most common, purchase of goods or services. |
| ReturnIncome  | int  | 2     | This means a return of a product or service.     |
| Expense       | int  | 3     | Expense                                          |
| ReturnExpense | int  | 4     | Return expense                                   |

## EsiaUrlResponse

| Req | Name | Type   | Description                                               |
| --- | ---- | ------ | --------------------------------------------------------- |
| \*  | url  | string | Url to login via external Esia provider, that uses OAuth2. |

## EsiaLoginRequest

| Req | Name               | Type   | Description                                                                                                   |
| --- | ------------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| \*  | authorization_code | string | The authorization code is a temporary code that the client will exchange for an access token. Used in OAuth2. |
| \*  | state              | string | The state parameter is used to protect against XSRF in OAuth2 flow.                                           |
| \*  | client_secret      | string | [Client secret](./terms.md#client-secret).                                                                |

## FLLoginRequest

| Req | Name          | Type   | Description                                                         |
| --- | ------------- | ------ | ------------------------------------------------------------------- |
| \*  | inn           | string | Tax identification number. Used when logging in through the FNS LK. |
| \*  | password      | string | FNS LK password.                                                    |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret).                      |

## PhoneLoginRequest

| Req | Name          | Type   | Description                                    |
| --- | ------------- | ------ | ---------------------------------------------- |
| \*  | phone         | string | Your phone number.                             |
| \*  | captcha       | string | Google captcha key.                            |
| \*  | os            | string | Value: `android` or `ios`.                     |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret). |

## PhoneVerifyRequest

| Req | Name          | Type   | Description                                    |
| --- | ------------- | ------ | ---------------------------------------------- |
| \*  | phone         | string | Your phone number.                             |
| \*  | code          | string | Verification code sent to you by SMS.          |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret). |

## LoginResponse

| Req    | Name          | Type   | Description                                                                                        |
| ------ | ------------- | ------ | -------------------------------------------------------------------------------------------------- |
| &nbsp; | email         | string | Email address provided during registration (optional).                                             |
| &nbsp; | name          | string | Your name provided during registration (optional).                                                 |
| &nbsp; | phone         | string | Your phone number (optional).                                                                      |
| &nbsp; | region        | string | Your region (optional).                                                                            |
| &nbsp; | surname       | string | Your surname (optional).                                                                           |
| \*     | sessionId     | string | [Access token](./terms.md#access-token). Used in [authorization](./general-spec.md#authorization). |
| \*     | refresh_token | string | [Refresh token](./terms.md#refresh-token).                                                         |

## RefreshTokensRequest

| Req | Name          | Type   | Description                                    |
| --- | ------------- | ------ | ---------------------------------------------- |
| \*  | refresh_token | string | [Refresh token](./terms.md#refresh-token).     |
| \*  | client_secret | string | [Client secret](./terms.md#client-secret). |

## RefreshTokensResponse

| Req | Name          | Type   | Description                                                                                        |
| --- | ------------- | ------ | -------------------------------------------------------------------------------------------------- |
| \*  | sessionId     | string | [Access token](./terms.md#access-token). Used in [authorization](./general-spec.md#authorization). |
| \*  | refresh_token | string | [Refresh token](./terms.md#refresh-token).                                                         |

## AddReceiptRequest

| Req | Name        | Type                                    | Description |
| --- | ----------- | --------------------------------------- | ----------- |
| \*  | fiscalData  | [FiscalDataRequest](#fiscaldatarequest) |
| \*  | sendToEmail | boolean                                 |

## FiscalDataRequest

| Req | Name          | Type   | Description |
| --- | ------------- | ------ | ----------- |
| \*  | date          | string |
| \*  | operationType | int    |
| \*  | sum           | long   |
| \*  | operationType | int    |
| \*  | fsId          | string |
| \*  | documentId    | string |
| \*  | fiscalSign    | string |

## AddReceiptQRRequest

| Req | Name | Type   | Description |
| --- | ---- | ------ | ----------- |
| \*  | qr   | string |

## ReceiptShort

## ReceiptDetails
