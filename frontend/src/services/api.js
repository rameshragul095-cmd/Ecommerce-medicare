import axios from "axios";

const API = axios.create({
  baseURL: "https://medicare-backend-r6j.onrender.com/auth"
});

export default API;