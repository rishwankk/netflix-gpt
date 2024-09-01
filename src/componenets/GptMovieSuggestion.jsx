import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
      
        const {movieName,movieResult}=useSelector((store)=>store?.gpt)
        if(!movieName) return null
        // console.log("thiss",suggestedMovie?.map((movie)=>movie));
       
        
      
        

        
      

        
  return (
  <div className="bg-black text-white opacity-85 p-4 m-4  ">
    <div className="">
   
   {movieName.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResult[index]} />)}


    </div>

  </div>
  )
}

export default GptMovieSuggestion