const { getRequest, postRequest, deleteRequest} = require('../../service');
const { writeSession, removeSession } = require('../../helpers');
const { TOKEN } = require('../../store');

const login = async (username, password) => {
    if(TOKEN){
        return console.log('You are already authenticated');
    }
    const [response] = await postRequest(`/auth`, {username, password});
    if(response){
        writeSession('passphrase', password);
        writeSession('token', response.token);
        writeSession('userId', response.userId);
        return console.log(`Welcome to e2e messager, ${username}!`);
    }
    return console.log('Wrong credentials');
}

const logout = () => {
    if(!TOKEN){
        return console.log('You are not authenticated');
    }
    removeSession();
    return console.log('Good bye!');
}

module.exports = {
  login,
  logout
}