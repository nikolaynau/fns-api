# Data Model

## OperationType

Value | Type | Description
----- | ---- | ---------
  0   | int  | Unknown
  1   | int  | Income
  2   | int  | Return income
  3   | int  | Expense
  4   | int  | Return expense

## GetUrlOAuthEsiaResponse

Req | Name | Type | Description
--- | ---- | ---- | -----------
\*  | url | string | Url to login via external esia provider that uses OAuth2
