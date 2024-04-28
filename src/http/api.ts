import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5513',
    headers:{
        'Content-Type': 'application/json',
    },
})

export const login = async (data:{email:string;password:string}) =>{
    return api.post('api/users/login',data);
};

export const signup = async (data:{name:string,email:string;password:string}) =>{
    return api.post('api/users/register',data);
};