import axios from 'axios';

const baseURL = 'https://finalprojectironhackmodule3.herokuapp.com';

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
});

const AUTH_SERVICE = {
    signup: async data => {
        return await MY_SERVICE.post('/signup', data);
    },
    login: async data => {
        return await MY_SERVICE.post('/login', data)
    }
}

export default AUTH_SERVICE