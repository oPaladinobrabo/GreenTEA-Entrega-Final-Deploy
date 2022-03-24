import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://greenteadb.azurewebsites.net/api'
  });

export default Api;