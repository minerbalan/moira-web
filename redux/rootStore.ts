import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
import {initialCurrentUserState} from "./currentUser/slice";
import {initialLoginState} from "./login/slice";

const middlewareList = [...getDefaultMiddleware(), logger];

const preloadState = ({
    currentUser: initialCurrentUserState,
    login: initialLoginState
})

const rootStore = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadState,
});

export default rootStore;