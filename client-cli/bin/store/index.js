require('dotenv').config()
const user_data = require('./user_data.json');

const USER_ID = process.env.USER_ID || 123;
const TOKEN = user_data.token;

module.exports ={
    USER_ID,
    TOKEN,
}