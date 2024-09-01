import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainCont = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovie)
    
    
    if(!movies) return
    const number=movies.length||0
   
    
    const randomIndex = Math.floor(Math.random() * number);
    const {original_title,overview,id }=movies[randomIndex]
   
    
   
    
  
    
   
    
    
    
  return (
    <div className='pt-[30%] bg-black md:pt-0 md:bg-current'>

        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground Movie_Id={id} />

    </div>
  )
}

export default MainCont