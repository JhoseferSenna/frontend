import axios from "axios";

const api = axios.create({
  baseURL: "https://dmbox-backend.herokuapp.com"
});

export default api;
