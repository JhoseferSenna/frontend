import axios from "axios";

const api = axios.create({
    baseURL: 'https://devmarkbox.herokuapp.com',

});

export default api;
