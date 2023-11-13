const { encryptMessage, decryptMessage, readSession } = require('../../helpers');
const { getContact } = require('../contacts');
const { postRequest, getRequest } = require('../../service');

const sendMessage = async (name, payload) => {
    const encrypted = encryptMessage(payload);
    const contact = await getContact(name);
    const myId = readSession('userId');
    const message = {
        receiver: contact.contact_userid,
        sender: myId,
        payload: encrypted,
    }
    const [response, error] = await postRequest('/messages', message);
    return response ? console.log('message sent') : console.log(error);
}

const readMessages = async (name) => {
    const contact = await getContact(name);
    const myId = readSession('userId');
    const [response, error] = await getRequest(`/messages?receiver=${myId}&sender=${contact.contact_userid}`);
    const encrypted = response.messages[0].payload;
    const decrypted = decryptMessage(encrypted, contact.publicKey);
    console.log(decrypted);
}

module.exports = {
    sendMessage,
    readMessages,
}