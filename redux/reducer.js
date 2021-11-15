import {configureStore} from "@reduxjs/toolkit";
import main from './reducers/main'
import {createWrapper} from "next-redux-wrapper";

const store = configureStore({
    reducer:{
        main
    },
    middleware:[]
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);