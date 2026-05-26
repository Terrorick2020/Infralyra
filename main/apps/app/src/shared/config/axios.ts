import { API_HOSTNAME } from '.';
import axios from 'axios';

console.log(API_HOSTNAME)

const api = axios.create({
  baseURL: `http://${API_HOSTNAME}`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api
