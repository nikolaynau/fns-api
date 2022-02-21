# Login API Specification

- [General information](./general-spec.md)
- [A-1. Get external OAuth2 url for Esia](#a-1-get-external-oauth2-url-for-esia)

## **A-1. Get external OAuth2 url for Esia**

`GET v2/mobile/users/esia/auth/url`

Authorization is not required.

### Request Parameters

**No**

### Successful Response (Code: `200 OK`)

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | GetUrlOAuthEsiaResponse | [GetUrlOAuthEsiaResponse](./data-model.md#GetUrlOAuthEsiaResponse) | Response data containing url

### Errors

Code | Type | Description
---- | ---- | -----------
**500 Server Error** | string | The server was unable to process the request
**503 Service Unavailable** | string | Service is temporarily unavailable
