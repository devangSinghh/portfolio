import axios from 'axios';
const instance = axios.create({

    // Base Domain Name

    baseURL: 'http://52.66.195.148/'

});

export default instance;