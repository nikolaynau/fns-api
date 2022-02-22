## Receipt QR-code

After scanning the qr code from the receipt, you will receive the following information:

`t=20180518T220500&s=975.88&fn=8710000101125654&i=99456&fp=1250448795&n=1`

where:

`t` - Date from receipt.  
`s` - Total amount of the receipt.  
`fn` - FN number (Fiscal Number) 16-digit. E.g. 8710000100518392.  
`i` - FD number (Fiscal Document) up to 10 digits. E.g. 54812.  
`fp` - FP number (Fiscal Sign of the Document) up to 10 digits. E.g. 3522207165.  
`n` - Operation type (sale, purchase, etc.). See [OperationType](./data-model.md#OperationType).
