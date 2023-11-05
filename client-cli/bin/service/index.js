const {api} = require('./api');

const getRequest = async (endpoint) => {
    try{
        const response = await api.get(endpoint);
        return [response.data];
    }catch(err){
        return [false, err.response.data.error];
    }
}

const postRequest = async (endpoint, body) => {
    try{
        const response = await api.post(endpoint, body);
        return response.data;
    }catch(err){
        return [false, err.response.data.error];
    }
}

const deleteRequest = async (uri) => {
    try{
        await api.delete(uri);
        return [true];
    }catch(err){
        return [false, err.response.data];
    }
}

module.exports = {
    getRequest,
    postRequest,
    deleteRequest
}