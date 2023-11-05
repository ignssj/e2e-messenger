const { getRequest, postRequest, deleteRequest} = require('../../service');
const { createKeyPair, readUserProperty, writeProperty} = require('../../helpers');
const { USER_ID } = require('../../store');

const createUser = async (username, password) => {
    console.log('creating new user');
    const propExists = readUserProperty('privateKey');
    if(!propExists){
        const {publicKey, privateKey} = createKeyPair(password);
        writeProperty('privateKey', privateKey);
        const [response, message] = await postRequest('/users', {username, password, publicKey});
        return response ? console.log(`Welcome to e2e messager, ${username}!'`) : console.log(message)
    }
    return console.log('Please logout before creating a new account');
}

module.exports = {
  createUser,
}