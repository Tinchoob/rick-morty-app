import axios from 'axios';

const Service = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 1000
});

export default Service;
