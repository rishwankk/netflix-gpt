import React, { useEffect } from 'react'
import Headers from './Headers'
import { API_MOVIE } from '../constants'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainCont from './MainCont'
import SecondaryCont from './SecondaryCont'
import useNowPlayingVideo from '../hooks/useNowPlayingVideo'
import { useSelector } from 'react-redux'

const Browsing = () => {
  

  

  
    useNowPlayingMovie()
  
    
 
  return (
    <div className="">
      <Headers />
      <MainCont />
      <SecondaryCont />

      
    </div>
  )
}

export default Browsing