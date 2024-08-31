import React, { useEffect } from 'react'
import { addTopRatedMovie } from '../utils/moveiSlice'
import { API_MOVIE } from '../constants'
import { useDispatch } from 'react-redux'

const useTopRatedMovie = () => {
    const dispatch=useDispatch()
    const handleMovie=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_MOVIE)
        const result=await data.json()
   
        dispatch(addTopRatedMovie(result?.results))
        
    }
    
    useEffect(()=>{
        handleMovie()
    
    },[])
}

export default useTopRatedMovie