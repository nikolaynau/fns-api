# Receipt Status Explanation

## Success

This status means that the receipt was received from an internal system. The receipt is available and you can get it.

It includes:

- [ReceiptStatus.NPD_FOUND](./data-model.md#receiptstatus)
- [ReceiptStatus.HAVE_COPY](./data-model.md#receiptstatus)

## Pending

This status means that the receipt is in the process of being fetching from an internal system.

It includes:

- [ReceiptStatus.COPY_REQUESTED](./data-model.md#receiptstatus)
- [ReceiptStatus.HSM_REQUESTED](./data-model.md#receiptstatus)

## Error

This status means that an error occurred while fetching from an internal system. The error may be that the receipt was not found or for some other reason.

It includes:

- [ReceiptStatus.NPD_NOT_FOUND](./data-model.md#receiptstatus)
- [ReceiptStatus.HSM_NOK](./data-model.md#receiptstatus)
- [ReceiptStatus.RETRIEVE_FAILED](./data-model.md#receiptstatus)
- [ReceiptStatus.UNSUPPORTED_DOCUMENT_TYPE](./data-model.md#receiptstatus)
- [ReceiptStatus.STANDALONE_CASH](./data-model.md#receiptstatus)
- [ReceiptStatus.ERROR](./data-model.md#receiptstatus)

## Other

Any other status, that is not described above, can be considered as a fetch receipt error from internal system.
