import axios from 'axios';

const login = JSON.parse(sessionStorage.getItem('xln_token'));
const xln_token = `Bearer ${login?.token}`;


const instance = axios.create({
    baseURL: 'http://localhost:4005',
    headers: {
        'Authorization': xln_token ,
        'Content-Type': 'application/json'
    }
});

export default instance;