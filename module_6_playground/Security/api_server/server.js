const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'), //sec
    expressjwt = require('express-jwt'); //sec

const cars = require('./routes/cars');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //sec
const jwtCheck = expressjwt({ //sec
    secret: 'mysupersecretkey',
});

//app.use('/api/cars', cars);
app.use('/api/cars', jwtCheck, cars); //sec

app.set('port', process.env.PORT || 3050);
app.listen(app.get('port'));

console.log(`Listening on port ${app.get('port')}`);

module.exports = app;