import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        nowPlayingTrailer:null,
        popularMovie:null,
        topRatedMovie:null,
        upComingMovie:null


        

    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload

        },
    addTrailer:(state,action)=>{
            state.nowPlayingTrailer=action.payload
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload

        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload

        },
        addUpcomingMovie:(state,action)=>{
            state.upComingMovie=action.payload

        }
    }
})
export const {addNowPlayingMovie,addTrailer,addPopularMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions
export default movieSlice.reducer