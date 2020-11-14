import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 2000,
  
});

export default instance;