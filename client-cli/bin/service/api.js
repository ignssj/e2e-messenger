const axios = require('axios').default;
const {TOKEN} = require('../store');

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {'Authorization': TOKEN}
});

module.exports = {
    api
}