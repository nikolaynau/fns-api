# General Information

## Request Format

The data is sent in JSON format.

## Response Format

The response from the server is expected in JSON format.  
If the response code is an error, then the server returns the message as a regular string.

## Base URL

`https://irkkt-mobile.nalog.ru:8888`

## Encoding

`UTF-8`

## Common Headers

`Accept: application/json`  
`Content-type: application/json; charset=UTF-8`

## Additional Headers (optional)

`Device-OS: Android`  
`Device-Id: 7C82010F-16CC-446B-8F66-FC4080C66521`  
`ClientVersion: 2.11.1`  
`Accept-Language: ru-RU;q=1, en-US;q=0.9`

## Authorization

Authorization uses an access token. For protected methods, you must pass the `sessionId` header:

`sessionId: <your access token>`
