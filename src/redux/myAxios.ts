import axios, { AxiosInstance } from "axios";

export const myAxios:AxiosInstance = axios.create({
  baseURL: "https://senior-notes.firebaseio.com",
});
