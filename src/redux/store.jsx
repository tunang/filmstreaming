import { thunk } from "redux-thunk";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const store = configureStore( {reducer: rootReducers}, applyMiddleware(thunk));

export default store;