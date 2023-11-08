const contacts = require('./contacts');
const auth = require('./auth');
const users = require('./users');
const messages = require('./messages');

module.exports = {
    ...contacts,
    ...auth,
    ...users,
    ...messages,
}