import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moveiSlice"
import gptReducer from "./gptSlice"
import langReducer from "./configSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        lang:langReducer

    }
    
})
export default appStore