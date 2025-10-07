import axios from "axios";

export const api = axios.create({
  baseURL: "https://movieapp-f80e9-default-rtdb.firebaseio.com"
});
