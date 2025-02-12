import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://wttr.in",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
