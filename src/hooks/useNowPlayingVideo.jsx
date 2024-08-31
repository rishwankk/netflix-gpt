import  { useEffect } from 'react'
import { API_NOW_PLAYING } from '../constants'
import { useDispatch } from 'react-redux'
import {  addTrailer } from '../utils/moveiSlice'

const useNowPlayingVideo = (Movie_Id) => {
    const dispatch=useDispatch()
  
 const handleNowPaying=async()=>{
const data=await fetch(`https://api.themoviedb.org/3/movie/${Movie_Id}/videos`,API_NOW_PLAYING)
const result=await data.json()
const filterdData=result?.results?.filter((trailer)=>trailer.type==="Trailer")
const trailer=filterdData.length?filterdData[0]:result?.results[0]
dispatch(addTrailer(trailer))


 }
 useEffect(()=>{
    handleNowPaying()
},[])
}

export default useNowPlayingVideo