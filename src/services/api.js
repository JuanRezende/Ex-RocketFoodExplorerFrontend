import axios from "axios";

export const api = axios.create({
  baseURL: "https://ex-rocketfoodexplorerbackend.onrender.com",
});
