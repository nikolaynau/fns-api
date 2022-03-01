# Terms

## Client Secret

The `client_secret` is a secret known only to the application and the authorization server. It is mainly used to login and refresh the access token.

## Access Token

Access token are the thing that applications use to protected make API requests on behalf of a user. Used in [authorization](./general-spec.md#authorization). In fns api it must be specified in the header `sessionId`. E.g. `sessionId: <your access token>`.

## Refresh token

Refresh token means that the access token will expire and you'll be able to get a new one without the user's interaction.
