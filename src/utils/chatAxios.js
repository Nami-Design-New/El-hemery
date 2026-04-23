import axios from "axios";
const chatAxios = axios.create({
  baseURL: "https://dashboard.alhemery.sa/api-chat",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export default chatAxios;
