import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const middlewareList = [...getDefaultMiddleware(), logger];

const preloadState = ({})

const rootStore = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadState,
});

export default rootStore;