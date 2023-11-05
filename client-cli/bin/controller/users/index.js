const { getRequest, postRequest, deleteRequest} = require('../../service');
const fs = require('fs')

const login = async (username, password) => {
  const user = await postRequest(`/auth`, {username, password});
  if(user){
    fs.writeFileSync('./bin/store/user_data.json', JSON.stringify(user));
  }
  return user || false;
}

module.exports = {
  login,
}