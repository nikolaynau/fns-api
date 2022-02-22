# Data Model

## OperationType

Name | Type |  Value | Description
---- | ---- | ------ | -----------
Unknown       | int   | 0  | Unknown
Income        | int   | 1  | Income
ReturnIncome  | int   | 2  | Return income
Expense       | int   | 3  | Expense
ReturnExpense | int   | 4  | Return expense

## EsiaUrlResponse

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | url | string | Url to login via external esia provider that uses OAuth2

## EsiaLoginRequest

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | authorization_code | string | 
\*  | state | string | 
\*  | client_secret | string | 

## FLLoginRequest

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | inn | string | 
\*  | password | string | 
\*  | client_secret | string | 

## PhoneLoginRequest

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | phone | string | 
\*  | captcha | string | 
\*  | os | string | Default value: `android`
\*  | client_secret | string | 

## PhoneVerifyRequest

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | phone | string | 
\*  | code | string | 
\*  | client_secret | string | 

## LoginResponse

Req | Name | Type | Description
--- | ---- | ---- | -----------
&nbsp; | email         | string | 
&nbsp; | name          | string | 
&nbsp; | phone         | string | 
&nbsp; | region        | string | 
&nbsp; | surname       | string | 
\*     | sessionId     | string | 
\*     | refresh_token | string | 

## RefreshTokensRequest

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*     | refresh_token | string | 
\*     | client_secret | string | 

## RefreshTokensResponse

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*     | sessionId     | string | 
\*     | refresh_token | string | 
