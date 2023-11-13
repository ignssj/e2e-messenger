const { generateKeyPairSync, publicEncrypt, privateDecrypt, constants, privateEncrypt, publicDecrypt } = require('node:crypto');
const fs = require('fs');
const session = require('../store/session.json');

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
          passphrase: passphrase,
        },
      });
      return {publicKey, privateKey};
}

const readSession = (property) => {
    return session[property];
}

const writeSession = (property, value) => {
    session[property] = value;
    fs.writeFileSync('./bin/store/session.json', JSON.stringify(session));
}

const writeSecret = (name, key) => {
    fs.writeFileSync(`./bin/store/${name}.pem`, key);
};

const removeSession = () => {
    fs.writeFileSync('./bin/store/session.json', JSON.stringify({}));
}

const encryptMessage = (message) => {
    const private = fs.readFileSync('./bin/store/private.pem');
    const encryptedBuffer = privateEncrypt({
        key: private,
        passphrase: readSession('passphrase'),
        padding: constants.RSA_PKCS1_PADDING,
    }, Buffer.from(message, 'utf8'));
    return encryptedBuffer.toString('base64');
}

const decryptMessage = (encryptedMessage, publicKey) => {
    try{
        const encryptedBuffer = Buffer.from(encryptedMessage, 'base64');
        const decryptedBuffer = publicDecrypt({
            key: publicKey,
            padding: constants.RSA_PKCS1_PADDING,
        }, encryptedBuffer);
        return decryptedBuffer.toString('utf8');
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    createKeyPair,
    readSession,
    writeSession,
    writeSecret,
    removeSession,
    encryptMessage,
    decryptMessage,
}