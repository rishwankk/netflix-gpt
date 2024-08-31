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

const Browsing = () => {
  

  

  
    useNowPlayingMovie()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()
  
    
 
  return (
    <div className="">
      <Headers />
      <MainCont />
      <SecondaryCont />

      
    </div>
  )
}

export default Browsing