import React from 'react'
import useNowPlayingVideo from '../hooks/useNowPlayingVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({Movie_Id}) => {
  useNowPlayingVideo(Movie_Id)
  const trailerKey=useSelector((store)=>store?.movies?.nowPlayingTrailer?.key)

  
  return (
 <div className="">
  <iframe className='w-screen aspect-video '  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&si=5OK03h92Fa2RGYGf?`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
 </div>
  )
}

export default VideoBackground