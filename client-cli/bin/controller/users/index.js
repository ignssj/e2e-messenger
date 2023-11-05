const { getRequest, postRequest, deleteRequest} = require('../../service');

const getUser = async (id) => {
  console.log('getting a user');
  const user = await getRequest(`/users/${id}`);
  return user || false;
}

module.exports = {
  getUser,
}