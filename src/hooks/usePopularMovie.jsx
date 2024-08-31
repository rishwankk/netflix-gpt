import React, { useEffect } from 'react'
import { API_MOVIE } from '../constants'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/moveiSlice'

const usePopularMovie = () => {
    const dispatch=useDispatch()
const handleMovie=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_MOVIE)
    const result=await data.json()
    console.log(result);
    dispatch(addPopularMovie(result?.results))
    
}
useEffect(()=>{
    handleMovie()

},[])
}

export default usePopularMovie