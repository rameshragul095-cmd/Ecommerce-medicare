import axios from "axios";

const API = axios.create({
  baseURL: " https://awry-portly-dismantle.ngrok-free.dev"
});

export default API;