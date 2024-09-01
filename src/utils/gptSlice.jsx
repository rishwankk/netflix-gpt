import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSlice:false,
        movieName:null,
        movieResult:null
    },
    reducers:{
        toggeleGptSearchView:(state,action)=>{
            state.showGptSlice=!state.showGptSlice
        },
        addMovieResult:(state,action)=>{
            const{movieName,movieResult}=action.payload
            state.movieName=movieName
            state.movieResult=movieResult

        },
        clearSlice:(state,action)=>{
            
            state.movieName=null
            state.movieResult=null
        }
    }
})
export const {toggeleGptSearchView,addMovieResult,clearSlice}=gptSlice.actions
export default gptSlice.reducer