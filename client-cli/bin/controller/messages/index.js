const crypto = require('crypto');

const sendMessage = (name, message) => {
    const sessionKey = crypto.randomBytes(32);
    console.log(name);
    console.log(message);
    console.log(sessionKey);
}

module.exports = {
    sendMessage,
}