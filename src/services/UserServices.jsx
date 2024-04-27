import axios from "axios";

export const loginApi = (email, password) => {
    return axios.post("https://reqres.in/api/login", {email, password});
}

export const registerApi = (email, password) => {
    return axios.post(("https://reqres.in/api/register", {email, password}));
}