import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryCont = () => {
  const movie=useSelector((store)=>store?.movies)
  
  
    
  return (
    <div className="bg-black">
    <div className='mt-0 md:-mt-44 relative  z-50  '>
      <MovieList title={"Up coming"} movies={movie.upComingMovie} />
      <MovieList title={"Now playing"} movies={movie.nowPlayingMovie} />
      <MovieList title={"Popular"} movies={movie.popularMovie} />
      <MovieList title={"Top rated"} movies={movie.topRatedMovie} />
      <MovieList title={"Now playing"} movies={movie.nowPlayingMovie} />
    </div>
      
    </div>
  )
}

export default SecondaryCont