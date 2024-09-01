import React, { useEffect } from 'react'
import { API_MOVIE } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovie } from '../utils/moveiSlice'

const usePopularMovie = () => {
    const dispatch=useDispatch()
    const popularMovie = useSelector((state) => state.movies.popularMovie)
const handleMovie=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_MOVIE)
    const result=await data.json()
  
    dispatch(addPopularMovie(result?.results))
    
}
useEffect(()=>{
    {!popularMovie && handleMovie()}
    handleMovie()

},[])
}

export default usePopularMovie