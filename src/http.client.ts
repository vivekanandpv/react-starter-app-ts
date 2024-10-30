import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "X-Custom": "Custom Value",
  },
});
