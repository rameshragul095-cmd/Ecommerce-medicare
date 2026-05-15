import axios from "axios";

const API = axios.create({
  baseURL: "https://medicare-backend-nfgj.onrender.com/auth"
});

export default API;