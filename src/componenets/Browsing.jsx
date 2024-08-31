import React, { useEffect } from 'react'
import Headers from './Headers'
import { API_MOVIE } from '../constants'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainCont from './MainCont'
import SecondaryCont from './SecondaryCont'
import useNowPlayingVideo from '../hooks/useNowPlayingVideo'
import { useSelector } from 'react-redux'
import usePopularMovie from '../hooks/usePopularMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import GptSearch from './GptSearch'

const Browsing = () => {

  const showGptSearch=useSelector((store)=>store.gpt?.showGptSlice)

  
  

  

  
    useNowPlayingMovie()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()
  
    
 
  return (
    <div className="">
      <Headers />
      {!showGptSearch?
      <>
      <MainCont />
      <SecondaryCont />
      </>
      
      :<GptSearch />}

  

      
    </div>
  )
}

export default Browsing