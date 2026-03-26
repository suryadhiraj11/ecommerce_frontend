import axios from "axios";

const API = axios.create({
  baseURL:"ecommercebackend-production-a186.up.railway.app/api"
});

export default API;
