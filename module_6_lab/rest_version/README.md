# Module 6 Exercise

## auth folder
Here the authentication server is implemented. We have two tuples of username/password valids. If the server receives a request with a valid tuple, it returns a JSON Web Token. Private key used to sign the token is stored on **.env** file.

Valid users
```js
const users = [
    { id: 1, username: 'admin', password: 'test' },
    { id: 2, username: 'joaquin', password: 'master7' },
];
```

.env file content
```env
PORT=3070
PRIVATE_KEY="privatekey"
```

To sign JWT `express-jwt` library is used.
```bash
npm i express-jwt
```

## client folder

API has been implemented with *XMLHttpRequest*, *native fetch* and *axios*. To test each API you have to comment/uncomment the necessary import on file [client/src/app.js](./client/src/app.js).

```js
...
from "./API/carsApi.xmlhttprequest";
// from "./API/carsApi.fetch";
// from "./API/carsApi.axios";
...
```

A simple login form has been also implemented in order to get access token from authentication server.

## server folder

To verify that requests are sending a valid JSON Web Token it is neccesary to install `express-jwt` library.
```bash
npm i express-jwt
```

After installation we have to use this library and implement a middleware that checks if the incoming includes or not a valid JWT.
```js
...
expressjwt = require('express-jwt');
...
const jwtCheck = expressjwt({
  secret: process.env.PRIVATE_KEY,
});

app.use('/api/users', jwtCheck, users);
app.use('/api/cars', jwtCheck, cars);
...
```

.env file content
```.env
PORT=3050
PRIVATE_KEY="privatekey"
```

## Use of .env files
To use .env files you must install `dotenv` library. In this project, the use of .env files allows me to extract the private key name of JWT out of the application code. As .env files store sensitive data like keys or similar should not be commited, but I have committed both .env files (auth and api servers) to ease exercise verification.
```bash
npm i dotenv
```