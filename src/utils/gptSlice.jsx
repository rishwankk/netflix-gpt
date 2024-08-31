import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSlice:false
    },
    reducers:{
        toggeleGptSearchView:(state,action)=>{
            state.showGptSlice=!state.showGptSlice
        }
    }
})
export const {toggeleGptSearchView}=gptSlice.actions
export default gptSlice.reducer