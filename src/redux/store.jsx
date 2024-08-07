// import { thunk } from "redux-thunk";
// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import rootReducers from "./reducer";

// const store = configureStore( {reducer: rootReducers}, applyMiddleware(thunk));

// export default store;


import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import {combineReducers} from "redux"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./reducer/userReducer";
import asideReducer from "./reducer/asideReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducers = combineReducers({
    user : userReducer,   
    asideStatus : asideReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export default store;
