import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../constants';
import GptSearch from './GptSearch';
import { toggeleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Headers = () => {
  
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  const lang=useSelector((store)=>store.gpt?.showGptSlice)
  console.log("lang",lang);
  
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate("/")
    
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      
      // An error happened.
    });
  }

  useEffect( ()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        
        // ...
      }
    });
    return ()=> unSubscribe()
   },[])


  const handleUser = () => {
    setShowDropdown(!showDropdown); 
  };
  const handleGptSearch=()=>{
    dispatch(toggeleGptSearchView())
   

  }

const  handleLanguage=(e)=>{
dispatch(changeLanguage(e.target.value))


  }
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black px-8 py-5 z-50  flex justify-between'>
        <img className=' w-44 ' src={LOGO} alt="logo-main" />

        {user && (<div className="flex justify-end items-center  ">
          {lang &&
          <select name="" id="" className='rounded-lg opacity-25' onChange={handleLanguage}>
            {  SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifire} className='' value={lang.identifire}>{lang.language}</option>)}
          </select>
}
          <button className='bg-purple-800 m-5 rounded-lg mx-14 ' onClick={handleGptSearch}>GPT Search</button>
       
       <img  className='w-10 rounded-full'  src={user.photoURL} alt=""  onMouseEnter={handleUser}/>
       {showDropdown && (
         <div className=" bg-white rounded shadow-lg  absolute " onMouseLeave={handleUser}>
          
           <button className="block px-4 py-2 text-black hover:bg-gray-200">Profile</button>
           <button className="block px-4 py-2 text-black hover:bg-gray-200">Account</button>
           <button className="block px-4 py-2 text-black hover:bg-gray-200" onClick={handleSignout}>Sign Out</button>
         </div>
       )}

</div> )}

    </div>
  )
}

export default Headers