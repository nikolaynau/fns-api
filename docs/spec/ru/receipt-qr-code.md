## QR-код на чеке

После сканирования QR-кода с чека, вы получите следующую информацию:

`t=20180518T220500&s=975.88&fn=8710000101125654&i=99456&fp=1250448795&n=1`

где:

`t` - Дата с чека в формате ISO 8601. Например `20180518T220500`.  
`s` - Общая сумма чека. Например `975.88`.  
`fn` - Номер ФН (Фискальный Номер) 16-значный. Например `8710000100518392`.
`i` - Номер ФД (Фискальный Документ) до 10 знаков. Например `54812`.  
`fp` - Номер ФПД (Фискальный Признак Документа, также известный как ФП) до 10 знаков. Например `3522207165`.  
`n` - Тип операции (продажа, покупка и тд.). См. [OperationType](./data-model.md#OperationType). Например `1`.
