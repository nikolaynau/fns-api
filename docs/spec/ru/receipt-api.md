# Спецификация API чеков

- [B-1. Добавление чека по фискальным данным](#b-1-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D0%BA%D0%B0-%D0%BF%D0%BE-%D1%84%D0%B8%D1%81%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC)
- [B-2. Добавление чека по данным из QR-кода](#b-2-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D0%BA%D0%B0-%D0%BF%D0%BE-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%B7-qr-%D0%BA%D0%BE%D0%B4%D0%B0)
- [B-3. Получение информации о чеке](#b-3-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BE-%D1%87%D0%B5%D0%BA%D0%B5)
- [B-4. Получение списка добавленных чеков](#b-4-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%87%D0%B5%D0%BA%D0%BE%D0%B2)
- [B-5. Удаление чека](#b-5-%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D0%BA%D0%B0)

## **B-1. Добавление чека по фискальным данным**

`POST v2/ticket`

Требуется авторизация. Подробнее [здесь](./general-spec.md#authorization).

#### **Параметры запроса**

| Req | Название          | Принадлежность | Тип                                                    | Описание        |
| --- | ----------------- | -------------- | ------------------------------------------------------ | --------------- |
| \*  | AddReceiptRequest | Body           | [AddReceiptRequest](./data-model.md#AddReceiptRequest) | Данные запроса. |

#### Успешный ответ (Код: `200 OK`)

| Req | Название     | Тип                                          | Описание                                             |
| --- | ------------ | -------------------------------------------- | ---------------------------------------------------- |
| \*  | ReceiptShort | [ReceiptShort](./data-model.md#ReceiptShort) | Данные ответа, содержащие краткую информацию о чеке. |

#### **Ошибки**

| Код                         | Тип    | Описание                          |
| --------------------------- | ------ | --------------------------------- |
| **400 Bad Request**         | string | Неверные параметры запроса.       |
| **401 Unauthorized**        | string | Требуется авторизация.            |
| **429 Too Many Requests**   | string | Дневной лимит запросов превышен.  |
| **500 Server Error**        | string | Сервер не смог обработать запрос. |
| **503 Service Unavailable** | string | Сервис временно недоступен.       |

## **B-2. Добавление чека по данным из QR-кода**

`POST v2/ticket`

Требуется авторизация. Подробнее [здесь](./general-spec.md#authorization).

#### **Параметры запроса**

| Req | Название            | Принадлежность | Тип                                                        | Описание        |
| --- | ------------------- | -------------- | ---------------------------------------------------------- | --------------- |
| \*  | AddReceiptQRRequest | Body           | [AddReceiptQRRequest](./data-model.md#AddReceiptQRRequest) | Данные запроса. |

#### Успешный ответ (Код: `200 OK`)

| Req | Название     | Тип                                          | Описание                                             |
| --- | ------------ | -------------------------------------------- | ---------------------------------------------------- |
| \*  | ReceiptShort | [ReceiptShort](./data-model.md#ReceiptShort) | Данные ответа, содержащие краткую информацию о чеке. |

#### **Ошибки**

| Код                         | Тип    | Описание                          |
| --------------------------- | ------ | --------------------------------- |
| **400 Bad Request**         | string | Неверные параметры запроса.       |
| **401 Unauthorized**        | string | Требуется авторизация.            |
| **429 Too Many Requests**   | string | Дневной лимит запросов превышен.  |
| **500 Server Error**        | string | Сервер не смог обработать запрос. |
| **503 Service Unavailable** | string | Сервис временно недоступен.       |

## **B-3. Получение информации о чеке**

`GET v2/tickets/{id}`

Требуется авторизация. Подробнее [здесь](./general-spec.md#authorization).

#### **Параметры запроса**

| Req | Название | Принадлежность | Тип  | Описание            |
| --- | -------- | -------------- | ---- | ------------------- |
| \*  | id       | Path           | long | Идентификатор чека. |

#### Успешный ответ (Код: `200 OK`)

| Req | Название       | Тип                                              | Описание                                               |
| --- | -------------- | ------------------------------------------------ | ------------------------------------------------------ |
| \*  | ReceiptDetails | [ReceiptDetails](./data-model.md#ReceiptDetails) | Данные ответа, содержащие подробную информацию о чеке. |

#### **Ошибки**

| Код                         | Тип    | Описание                               |
| --------------------------- | ------ | -------------------------------------- |
| **400 Bad Request**         | string | Неверные параметры запроса.            |
| **404 Not Found**           | string | Чек с таким идентификатором не найден. |
| **401 Unauthorized**        | string | Требуется авторизация.                 |
| **500 Server Error**        | string | Сервер не смог обработать запрос.      |
| **503 Service Unavailable** | string | Сервис временно недоступен.            |

## **B-4. Получение списка добавленных чеков**

`GET v2/tickets`

Требуется авторизация. Подробнее [здесь](./general-spec.md#authorization).

#### **Параметры запроса**

**Нет**

#### Успешный ответ (Код: `200 OK`)

| Req | Название            | Тип                                                   | Описание                                |
| --- | ------------------- | ----------------------------------------------------- | --------------------------------------- |
| \*  | ReceiptListResponse | Array\<[ReceiptShort](./data-model.md#ReceiptShort)\> | Данные ответа, содержащие список чеков. |

#### **Ошибки**

| Код                         | Тип    | Описание                          |
| --------------------------- | ------ | --------------------------------- |
| **400 Bad Request**         | string | Неверные параметры запроса.       |
| **401 Unauthorized**        | string | Требуется авторизация.            |
| **500 Server Error**        | string | Сервер не смог обработать запрос. |
| **503 Service Unavailable** | string | Сервис временно недоступен.       |

## **B-5. Удаление чека**

`DELETE v2/tickets/{id}`

Требуется авторизация. Подробнее [здесь](./general-spec.md#authorization).

#### **Параметры запроса**

| Req | Название | Принадлежность | Тип  | Описание            |
| --- | -------- | -------------- | ---- | ------------------- |
| \*  | id       | Path           | long | Идентификатор чека. |

#### Успешный ответ (Код: `200 OK`)

Чек успешно удален.

#### **Ошибки**

| Код                         | Тип    | Описание                          |
| --------------------------- | ------ | --------------------------------- |
| **400 Bad Request**         | string | Неверные параметры запроса.       |
| **401 Unauthorized**        | string | Требуется авторизация.            |
| **500 Server Error**        | string | Сервер не смог обработать запрос. |
| **503 Service Unavailable** | string | Сервис временно недоступен.       |
