import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import { asideReducer } from './asideReducer';
import favoriteReducer from './favoriteReducer';

const rootReducers = combineReducers({
    user: userReducer, favFilms: favoriteReducer, asideStatus: asideReducer
})


export default rootReducers;