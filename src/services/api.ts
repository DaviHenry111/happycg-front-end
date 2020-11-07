import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happycg.herokuapp.com/',
})

export default api;