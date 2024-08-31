import React, { useEffect } from 'react'
import { API_MOVIE } from '../constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovie } from '../utils/moveiSlice'

const useUpcomingMovie = () => {
    const dispatch=useDispatch()
    const handleMovie=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_MOVIE)
        const result=await data.json()
        console.log(result);
        dispatch(addUpcomingMovie(result?.results))
        
    }
    useEffect(()=>{
        handleMovie()
    
    },[])
}

export default useUpcomingMovie