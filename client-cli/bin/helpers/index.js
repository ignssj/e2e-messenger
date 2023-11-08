const { generateKeyPairSync } = require('node:crypto');
const fs = require('fs');
const userData = require('../store/user_data.json');

const createKeyPair = (passphrase) => {
    const {publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: passphrase
        },
      });
      return {publicKey, privateKey};
}

const readUserProperty = (property) => {
    return userData[property] !== undefined;
}

const writeProperty = (property, value) => {
    userData[property] = value;
    fs.writeFileSync('./bin/store/user_data.json', JSON.stringify(userData));
}

const removeUserData = () => {
    fs.writeFileSync('./bin/store/user_data.json', JSON.stringify({}));
}

module.exports = {
    createKeyPair,
    readUserProperty,
    writeProperty,
    removeUserData,
}