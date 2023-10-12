import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://5504-2a03-d000-5183-5dcc-e4f6-a486-9203-7b31.ngrok-free.app',
  timeout: 5000,
});

