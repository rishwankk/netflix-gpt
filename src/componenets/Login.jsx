import React, { useRef, useState } from 'react'

import Headers from './Headers'
import {HandleForm} from "../utils/validation"

const Login = () => {
    const[signUser,setSignUser]=useState(true)
    const[message,setMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const fullname=useRef(null)
    const Togglesign=()=>{
        setSignUser(!signUser)

    }
    const SubmitForm=()=>{
        const message=HandleForm(email.current.value,password.current.value,signUser,  !signUser ? fullname.current.value : null)
        console.log(message);
        setMessage(message)
        


    }
  return (
      <div >
   
     <Headers />
     <div className='absolute'>
<img src={"https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"} alt="body" />

     </div>
       <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black p-12 w-3/12  my-36 mx-auto right-0 left-0 opacity-80 text-white rounded-lg'>
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