import axios from "axios";
const chatAxios = axios.create({
  baseURL: "/api-chat", 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export default chatAxios;
