import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://test.atwinta.ru/api/v1/',
}) ;
export default instance;
