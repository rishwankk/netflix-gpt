import React, { useEffect } from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import Login from './Login'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Browsing from './Browsing';
import Error from './Error';

const Body = () => {
  const dispatch=useDispatch()


    const appRouter=createBrowserRouter([
      {
        path:'/',
        element:<Login />
      },
      {
        path:'/browse',
        element:<Browsing />
      },
      {
        path:"/error",
        element:<Error />
      }
      
    ])


   useEffect( ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        // ...
      }
    });
   })

  return (
    <div>

        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body