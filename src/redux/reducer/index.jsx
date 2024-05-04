import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import favoriteReducer from './favoriteReducer';

const rootReducers = combineReducers({
    user: userReducer, favFilms: favoriteReducer
})


export default rootReducers;