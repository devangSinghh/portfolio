import axios from 'axios';
const instance = axios.create({

    // Base Domain Name

    baseURL: 'http://localhost:1111/'

});

export default instance;