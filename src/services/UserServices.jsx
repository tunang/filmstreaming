import axios from "axios";

const loginApi = (email, password) =>{
    return axios.post("https://reqres.in/api/login", {email, password})
}

const registerApi = (email, password) => {
    return axios.post(("https://reqres.in/api/register", {email, password}));
}

export { loginApi, registerApi }