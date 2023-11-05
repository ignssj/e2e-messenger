const { getRequest, postRequest, deleteRequest} = require('../../service');
const { writeProperty, removeUserData } = require('../../helpers');
const { TOKEN } = require('../../store');

const login = async (username, password) => {
    if(TOKEN){
        return console.log('You are already authenticated');
    }
    const user = await postRequest(`/auth`, {username, password});
    if(user){
        writeProperty('token', user[0].token);
    }
    return console.log(`Welcome to e2e messager, ${username}!`) || false;
}

const logout = () => {
    if(!TOKEN){
        return console.log('You are not authenticated');
    }
    removeUserData();
    return console.log('Good bye!');
}

module.exports = {
  login,
  logout
}