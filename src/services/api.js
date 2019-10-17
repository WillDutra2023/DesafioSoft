import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 60,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
