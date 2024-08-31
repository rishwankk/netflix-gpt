import React from 'react'
import { BG_IMAGE } from '../constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div className=''>
        <div className="absolute -z-20">
        <img src={BG_IMAGE} alt="" />

        </div>
       <GptMovieSuggestion/>
            <GptSearchBar />

       
    </div>
  )
}

export default GptSearch