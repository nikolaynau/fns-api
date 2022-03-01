# Пояснение статуса чека

## Успешный

Этот статус означает, что чек был получен из внутренней подсистемы. Чек загружен и вы можете получить его.

Статус включает в себя:

- [ReceiptStatus.NPD_FOUND](./data-model.md#receiptstatus)
- [ReceiptStatus.HAVE_COPY](./data-model.md#receiptstatus)

## В ожидании

Этот статус означает, что чек находится в процессе получения из внутренней подсистемы.

Статус включает в себя:

- [ReceiptStatus.COPY_REQUESTED](./data-model.md#receiptstatus)
- [ReceiptStatus.HSM_REQUESTED](./data-model.md#receiptstatus)

## Ошибка

Этот статус означает, что при получении чека из внутренней подсистемы произошла ошибка. Ошибка может заключаться в том, что чек не найден или по какой-то другой причине.

Статус включает в себя:

- [ReceiptStatus.NPD_NOT_FOUND](./data-model.md#receiptstatus)
- [ReceiptStatus.HSM_NOK](./data-model.md#receiptstatus)
- [ReceiptStatus.RETRIEVE_FAILED](./data-model.md#receiptstatus)
- [ReceiptStatus.UNSUPPORTED_DOCUMENT_TYPE](./data-model.md#receiptstatus)
- [ReceiptStatus.STANDALONE_CASH](./data-model.md#receiptstatus)
- [ReceiptStatus.ERROR](./data-model.md#receiptstatus)

## Другие

Любой другой статус, не описанный выше, может рассматриваться как ошибка получения чека из внутренней подсистемы.
