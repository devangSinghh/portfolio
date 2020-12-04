import axios from 'axios';
const instance = axios.create({
    // Base Domain Name
    baseURL: 'https://devang.design/'

});

export default instance;