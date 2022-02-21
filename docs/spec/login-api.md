# Login API Specification

- [A-1. Get Esia url for OAuth2](#a-1-get-esia-url-for-oauth2)
- [A-2. Login via Esia](#a-2-login-via-esia)
- [A-3. Login via LK FL](#a-3-login-via-lk-fl)
- [A-4. Send request login by phone](#a-4-send-request-login-by-phone)
- [A-5. Login by phone](#a-5-login-by-phone)


## **A-1. Get Esia url for OAuth2**

`GET v2/mobile/users/esia/auth/url`

Authorization is not required.

#### **Request Parameters**

**No**

#### Successful Response (Code: `200 OK`)

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

#### Successful Response (Code: `200 OK`)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | LoginResponse | [LoginResponse](./data-model.md#LoginResponse) | Response data containing login information

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**400 Bad Request** | string | Invalid request parameters
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable


## **A-3. Login via LK FL**

`POST v2/mobile/users/lkfl/auth`

Authorization is not required.

#### **Request Parameters**

Req | Name | Belong | Type | Description
----| ---- | ------ | ---- | -----------
\* | FLLoginRequest | Body | [FLLoginRequest](./data-model.md#FLLoginRequest) | Request data

#### Successful Response (Code: `200 OK`)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | LoginResponse | [LoginResponse](./data-model.md#LoginResponse) | Response data containing login information

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**400 Bad Request** | string | Invalid request parameters
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable


## **A-4. Send request login by phone**

`POST v2/auth/phone/request`

Authorization is not required.

#### **Request Parameters**

Req | Name | Belong | Type | Description
----| ---- | ------ | ---- | -----------
\* | PhoneLoginRequest | Body | [PhoneLoginRequest](./data-model.md#PhoneLoginRequest) | Request data

#### Successful Response (Code: `200 OK`)

An SMS with a verification code has been sent to the specified phone number.

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**400 Bad Request** | string | Invalid request parameters
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable


## **A-5. Login by phone**

`POST v2/auth/phone/verify`

Authorization is not required.

#### **Request Parameters**

Req | Name | Belong | Type | Description
----| ---- | ------ | ---- | -----------
\* | PhoneVerifyRequest | Body | [PhoneVerifyRequest](./data-model.md#PhoneVerifyRequest) | Request data

#### Successful Response (Code: `200 OK`)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | LoginResponse | [LoginResponse](./data-model.md#LoginResponse) | Response data containing login information

#### **Errors**

Code | Type | Description
---- | ---- | -----------
**400 Bad Request** | string | Invalid request parameters
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable
