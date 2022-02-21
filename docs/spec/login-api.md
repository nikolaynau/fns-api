# Login API Specification

- [A-1. Get external OAuth2 url for Esia](#a-1-get-external-oauth2-url-for-esia)
- [A-2. Login via Esia](#a-2-login-via-esia)

## **A-1. Get external OAuth2 url for Esia**

`GET v2/mobile/users/esia/auth/url`

Authorization is not required.

#### **Request Parameters**

**No**

#### Successful Response (Code: **200 OK**)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | EsiaUrlResponse | [EsiaUrlResponse](./data-model.md#EsiaUrlResponse) | Response data containing url

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable

## **A-2. Login via Esia**

`POST v2/mobile/users/esia/auth`

Authorization is not required.

#### **Request Parameters**

Req | Name | Belong | Type | Description
----| ---- | ------ | ---- | -----------
\* | EsiaLoginRequest | Body | [EsiaLoginRequest](./data-model.md#EsiaLoginRequest) | Request data

#### Successful Response (Code: **200 OK**)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | LoginResponse | [LoginResponse](./data-model.md#LoginResponse) | Response data containing login information

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**400 Bad Request** | string | Invalid request parameters
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable
