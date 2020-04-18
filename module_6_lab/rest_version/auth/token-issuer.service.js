const jwt = require('jsonwebtoken');
require('dotenv').config();

const users = [
    { id: 1, username: 'admin', password: 'test' },
    { id: 2, username: 'joaquin', password: 'master7' },
];

const generateToken = (user, expiresIn = '1 hours') => (
    jwt.sign(
        {
            sub: user.id,
            username: user.username,
        },
        process.env.PRIVATE_KEY,
        { expiresIn: expiresIn }
    )
);

const responseResolver = {
    ['denyAccess']: {
        status: 401,
        response: 'Invalid credentials',
    },
    ['grantAccess']: (token) => ({
        status: 200,
        response: { access_token: token }
    })
};

const resolveRequiredCredentials = (username, password) => (
    (!!username && !!password) ? null : responseResolver['denyAccess']
);

const retrieveUser = (username) => (
    users.find((u) => u.username === username)
);

const resolveUserNotFound = (user) => {
    return (!!user) ? null : responseResolver['denyAccess'];
};

const resolveInvalidCredentials = (user, password) => (
    (user.password === password) ? null : responseResolver['denyAccess']
);

exports.resolveLogin = (username, password) => {
    let response = resolveRequiredCredentials(username, password)

    if (!response) {
        const user = retrieveUser(username);
        response = resolveUserNotFound(user) || resolveInvalidCredentials(user, password);

        if (!response) {
            const token = generateToken(user);
            response = responseResolver['grantAccess'](token);
        }
    }

    return response;
};