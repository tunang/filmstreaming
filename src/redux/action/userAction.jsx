import { thunk } from "redux-thunk";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { loginApi } from "../../../../../ecommerce_reactjs/ecommerce_project/src/services/UserService";


export const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) =>  {
        dispatch({type: 'FETCH_USER_LOGIN'})

        let res = await loginApi(email, password);

        if(res && res.token){
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', email.trim());
            dispatch({type: 'FETCH_USER_SUCCESS'})
            
        }
        else{
            if(res && res.status === 400){
                console.log('Co loi');

            }
            dispatch({type: 'FETCH_USER_ERROR'})
        }
    }
}

export const handleLogoutRedux = () => {
    return async (dispatch, getState) => {
        dispatch({type: 'USER_LOGOUT'});
    }
}