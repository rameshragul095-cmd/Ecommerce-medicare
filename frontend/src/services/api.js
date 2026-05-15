import axios from "axios";

const API = axios.create({
  baseURL: "https://medicare-backend-rj0j.onrender.com"
});

export default API;