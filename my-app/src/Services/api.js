  
import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

export default api;

//Arquivo para configuração do axios, para consumir as api's