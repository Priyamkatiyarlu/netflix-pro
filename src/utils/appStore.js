import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from './moviesSlice';
import modalSlice from "./modalSlice";

const appStore = configureStore({
    reducer:{
        user: useReducer,
        movies: moviesReducer,
        modal: modalSlice,
    },
})
export default appStore;