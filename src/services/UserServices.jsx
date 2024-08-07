import axios from "axios";

import instance from "./axios/customAxiosNoHeader";
import { axiosInstance } from "./axios/customAxiosWithHeader";

const loginApi = (email, password) =>{
    return instance.post("/api/auth/login", {email, password})
}

const registerApi = (email, password) => {
    return instance.post(("/api/auth/register", {email, password, firstname, lastname}));
}

const logoutApi = () =>{
    return axiosInstance.delete("/api/auth/logout")
}

export { loginApi, registerApi, logoutApi }