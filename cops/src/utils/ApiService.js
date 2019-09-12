import http from 'axios';
import { API_URL } from '../constants';

const parseBody = res => res.data;

const request = {
    get: url => http.get(`${API_URL}${url}`).then(parseBody),
    post: (url,body) => http.post(`${API_URL}${url}`,body).then(parseBody),
    put: (url,body) => http.put(`${API_URL}${url}`,body).then(parseBody),
    delete: url => http.delete(`${API_URL}${url}`).then(parseBody),
}

const auth = {
    login: body => request.post('/cops/login',body),
    checkUser: body => request.post('/cops/checkAvailability',body),
    register: body => request.post('/cops',body)
}

export {
    auth
}