import React from 'react'
import { BG_IMAGE } from '../constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'


const GptSearch = () => {

  return (
    <div className=''>
        <div className="fixed -z-20">
        <img  className='h-screen object-cover md:h-auto ' src={BG_IMAGE} alt="" />

        </div>
            <GptSearchBar />
       <GptMovieSuggestion/>

       
    </div>
  )
}

export default GptSearch