import axios from 'axios';

const api = axios.create({
    baseURL: 'http://happycg.herokuapp.com',
})

export default api;