import React, { useRef } from 'react'
import language from '../utils/languageConst'


import { useDispatch, useSelector } from 'react-redux'
import Gemini from '../utils/geminiAi'

import { addMovieResult } from '../utils/gptSlice'
import { API_MOVIE } from '../constants'


const GptSearchBar = () => {
  const dispatch=useDispatch()
 
  
  
  const searchText=useRef(null)
    const selectedLang=useSelector((store)=>store.lang?.language)
    
    
    const handleSearchText=async()=>{
      
      const handleMovieSearch=async(movie)=>{
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,API_MOVIE)
        const result=await data.json()
        const json=result.results;
        return json
       
        
      }
    

   
    
      const searchQuery=`Act as a movie recomandation system and suggest some movies for the query :${searchText.current.value} .only give me name of five movies ,coma separated like the example result is given ahead . Example Karyasthan, Puthiya mugham,Chennai express, Body guard,Run way`

      const model=Gemini.getGenerativeModel({model:"gemini-pro"})
      const prompt=searchQuery
      const result=await model.generateContent(prompt)
      const response=await result.response;
      const movie=response?.candidates[0]?.content?.parts[0]?.text.split(",");
    
      const promiseArray=movie.map((mov)=>handleMovieSearch(mov))
      const finalResult=await Promise.all(promiseArray)
    
      dispatch(addMovieResult({movieName:movie,movieResult:finalResult}))
      
  
  
  
      
      
      
      
      
      
    }
    
   
    

    
  return (
    <div className=' pt-[50%] md:pt-[10%]  flex justify-center'>
        <form action="" className=' w-screen md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type="text" placeholder={language[selectedLang].gptSearchPlaceholder} />
        <button className='py-2 px-2 m-5 bg-red-800 col-span-3 rounded-lg' onClick={handleSearchText}>{language[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar