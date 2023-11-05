const { getRequest, postRequest, deleteRequest} = require('../../service');
const { TOKEN } = require('../../store');
const fs = require('fs');

const USER_DATA_PATH = './client-cli/bin/store/user_data.json';

const login = async (username, password) => {
    if(TOKEN){
        return console.log('You are already authenticated');
    }
    const user = await postRequest(`/auth`, {username, password});
    if(user){
    fs.writeFileSync(USER_DATA_PATH, JSON.stringify(user));
    }
    return console.log(`Welcome to e2e messager, ${username}!`) || false;
}

const logout = () => {
    if(!TOKEN){
        return console.log('You are not authenticated');
    }
    fs.writeFileSync(USER_DATA_PATH, JSON.stringify({}));
    return console.log('Good bye!');
}

module.exports = {
  login,
  logout
}