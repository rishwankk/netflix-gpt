import React from 'react'
import language from '../utils/languageConst'


import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const selectedLang=useSelector((store)=>store.lang?.language)
    
    
    
    
   
    

    
  return (
    <div className='pt-[10%]  flex justify-center'>
        <form action="" className=' w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input className='p-4 m-4 col-span-9' type="text" placeholder={language[selectedLang].gptSearchPlaceholder} />
        <button className='py-2 px-2 m-5 bg-red-800 col-span-3 rounded-lg'>{language[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar