import { thunk } from "redux-thunk";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { loginApi } from "../../services/UserServices";

export const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) =>  {
        dispatch({type: 'FETCH_USER_LOGIN'})

        let res = await loginApi(email, password);
        console.log(res.data);
        if(res && res.data && res.data.token){
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', email.trim());
            dispatch({type: 'FETCH_USER_SUCCESS'})
            
        }
        else{
            if(res && res.data && res.data.status === 400){
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