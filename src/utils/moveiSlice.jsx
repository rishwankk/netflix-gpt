import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        nowPlayingTrailer:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload

        },
    addTrailer:(state,action)=>{
            state.nowPlayingTrailer=action.payload
        }
    }
})
export const {addNowPlayingMovie,addTrailer}=movieSlice.actions
export default movieSlice.reducer