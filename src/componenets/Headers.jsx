import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Headers = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user=useSelector(store=>store.user)
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



  const handleUser = () => {
    setShowDropdown(!showDropdown); 
  };
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black px-8 py-5 z-50  flex justify-between'>
        <img className=' w-44 ' src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"} alt="logo-main" />

        {user && (<div className="flex justify-end items-center  ">
       
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