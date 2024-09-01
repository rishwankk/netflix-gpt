import React, { useEffect } from 'react'
import { API_MOVIE } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovie } from '../utils/moveiSlice'

const useNowPlayingMovie = () => {
    const dispatch=useDispatch()
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies)

  

    const handleNowPlaying=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_MOVIE)
        const result=await data.json()
        // console.log(result);
        dispatch(addNowPlayingMovie(result?.results))
        
    }
    useEffect(()=>{
        {!nowPlayingMovies && handleNowPlaying()}
       

    },[])

}

export default useNowPlayingMovie