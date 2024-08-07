import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://filmstreaming-server.onrender.com',
});

export default instance;