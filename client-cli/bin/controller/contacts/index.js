const { getRequest, postRequest, deleteRequest} = require('../../service');
const { getUser } = require('../auth');
const {USER_ID} = require('../../store');
const { readSession } = require('../../helpers');

const addContact = async (name, id) => {
  const body = {
    userid: USER_ID,
    contact_userid: id,
    name
  }
  const [response, message] = await postRequest('/contacts', body);
  return response ? console.log(`${name} added to your contacts.`) : console.log(message)
}

const removeContact = async (name) => {
  const [response] = await getRequest(`/contacts?name=${name}&limit=1&page=1`);
  if(!response.contacts){
    return console.log('This contact does not exist');
  }
  const [deleted, message] = await deleteRequest(`/contacts/${response.contacts[0]._id}`);
  if(!deleted){
    return console.log(message.error);
  }
  return console.log('Contact deleted');
}

const getContact = async(name) => {
    const [response] = await getRequest(`/contacts?limit=1&name=${name}`);
    return response.contacts[0] || {};
}

const getAllContacts = async () => {
    const myId = readSession('userId');
    const [response, error] = await getRequest(`/contacts?limit=10&userid=${myId}`);

    if(!response){
    return console.log(error);
    }
    if(!response.contacts.length){
    return console.log('No contacts found');
    }

    const contacts = response.contacts.map((contact) => {
    return {
        name: contact.name,
        contact_userid: contact.contact_userid
    }
    });
    return console.log('Your contacts:\n', contacts)
}

module.exports = {
  addContact,
  removeContact,
  getContact,
  getAllContacts
}