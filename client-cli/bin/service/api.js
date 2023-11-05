const axios = require('axios').default

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaWduYWNpbyIsImlhdCI6MTY5ODUxMjEwNSwiZXhwIjoxNzAxMTA0MTA1fQ.LhsU5g0c3II3gExWxIiKbj_kDzTDVGY4wai9m5DFryA'}
});

module.exports = {
    api
}