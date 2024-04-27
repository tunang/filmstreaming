import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';


const rootReducers = combineReducers({
    user: userReducer
})


export default rootReducers;