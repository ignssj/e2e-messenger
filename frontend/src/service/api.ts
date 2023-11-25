import axios from "axios";

const api = axios.create({
    baseURL: `http://52.90.47.2:3000/api`,
    timeout: 5000,
  //  headers: {'Authorization': TOKEN}
});

export default api;