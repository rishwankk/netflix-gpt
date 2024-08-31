import React from 'react'
import {  IMG_URL } from '../constants'


const MovieCard = ({poster_path}) => {
  
    
  return (
    <div className='w-44  pr-4  '>
        <img className='rounded-lg ' src={IMG_URL+poster_path} alt="img" />
       
    </div>
  )
}

export default MovieCard