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
