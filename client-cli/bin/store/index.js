require('dotenv').config()
const session = require('./session.json');

const USER_ID = process.env.USER_ID || 123;
const TOKEN = session.token;

module.exports ={
    USER_ID,
    TOKEN,
}