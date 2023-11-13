const { postRequest } = require('../../service');
const { createKeyPair, readSession, writeSecret } = require('../../helpers');

const createUser = async (username, password) => {
    console.log('creating new user');
    const propExists = readSession('token');
    if(!propExists){
        const {publicKey, privateKey} = createKeyPair(password);
        writeSecret('private', privateKey);
        writeSecret('public', publicKey);
        const [response, message] = await postRequest('/users', {username, password, publicKey});
        return response ? console.log(`Welcome to e2e messager, ${username}!'`) : console.log(message)
    }
    return console.log('Please logout before creating a new account');
}

module.exports = {
    createUser,
}