import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

import Headers from './Headers'
import {HandleForm} from "../utils/validation"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMAGE, USER_AVATAR } from '../constants';

const Login = () => {
  
    const[signUser,setSignUser]=useState(true)
    const[message,setMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const fullname=useRef(null)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const Togglesign=()=>{
        setSignUser(!signUser)

    }
    const SubmitForm=()=>{
        const message=HandleForm(email.current.value,password.current.value,signUser,  !signUser ? fullname.current.value : null)
       
        setMessage(message)

        if(message) return

        if(!signUser){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {

    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: "Rishwan K", photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
     
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setMessage(error.message)
    });
   
  
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode + " "+ errorMessage)
    // ..
  });
   }else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: fullname.current.value, photoURL: "https://avatars.githubusercontent.com/u/152471392?v=4"
    }).then(() => {
      // Profile updated!
      const{uid,email,displayName,photoURL}=auth.currentUser
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
        

      }))
      
      // ...
    }).catch((error) => {
      // An error occurred
      setMessage(error.message)
      // ...
    });
 
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode + " "+ errorMessage)
  });

        }
        


    }
  return (
      <div className='' >
   
     <Headers />
     <div className='absolute'>
<img className='h-screen object-cover w-screen' src={BG_IMAGE} alt="body" />

     </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black p-12 w-full md:w-3/12  my-36 mx-auto right-0 left-0 opacity-80 text-white rounded-lg'>
       <h1 className='text-white font-bold'>{signUser?"Sign In":"Sign Up"}</h1>
       <p className='text-red-700 text-center'>{message}</p>
       {!signUser && <input ref={fullname} type="text" placeholder='Name' className='p-2 m-2 w-full bg-slate-500' />}
        <input ref={email} type="text" placeholder='email' className='p-2 m-2 w-full bg-slate-500' />
     
        <input ref={password} type="password" placeholder='password' className='p-2 m-2 w-full bg-slate-500'/>
        <button className='bg-red-500 marker:p-2 m-2 w-full' onClick={SubmitForm}>{!signUser?"Sign In":"Sign Up"}</button>

        <h1 className='cursor-pointer ' onClick={Togglesign}> {signUser?"New to Netflix ? Sign  up now":"Alredy Registerd ? Sign In now"}</h1>
       </form>


    </div>
  )
}

export default Login