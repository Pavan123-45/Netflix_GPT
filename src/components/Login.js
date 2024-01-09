import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { ICON_URL } from '../utils/constants';

const Login = () => {
  const [signInForm, setSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState();
  const email=useRef(null);
  const password=useRef(null);
  const fullName=useRef(null);
  const dispatch=useDispatch();
  const toggleForm=()=>{
    setSignInForm(!signInForm)
  }
  const formHandle=()=>{
    const message=checkValidate(email.current.value,password.current.value)
    setErrorMessage(message)
    if(message) return

    if(!signInForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     updateProfile(user, {
      displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
       }).then(() => {
        const {uid,email, displayName } = auth.currentUser;
        dispatch(addUser({
          uid :uid, 
          email :email, 
          displayName :displayName, 
        }))
       }).catch((error) => {
        setErrorMessage(error.message)
       });
  })
  .catch((error) => {
    setErrorMessage("This account already exists ")
    
  });

    }
    else {
   signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
  });
     
    }
  }
  return (
    <div>
      <Header />
      <div className='absolute '>
      <img src= {ICON_URL} className='h-screen object-cover w-screen '
      alt='background-img' />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className=' w-8/12 md:w-3/12 absolute p-6 md:p-12 bg-black my-28 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
        { signInForm?"Sign In":"Sign Up"}
        </h1>
        {
          !signInForm && <input className='p-4 my-4 w-full rounded bg-gray-700'
          type='text'
          placeholder='Enter Full_Name'
          ref={fullName}
          /> 
        } 
        <input className='p-4 my-4 w-full rounded bg-gray-700'
         type='text'
         placeholder='Enter E-mail ' ref={email}
         />
         <input className='p-4 my-4 w-full rounded bg-gray-700'
         type='password'
         placeholder='Enter password' ref={password}
         />
         <p className='text-red-500 text-lg'>{errorMessage}</p>
         <button className='p-4 my-4 bg-red-600 w-full rounded' onClick={formHandle}>{ signInForm?"Sign In":"Sign Up"} </button>
         <p onClick={toggleForm} className='cursor-pointer py-4' >
         { signInForm?"New to Netflix? Sign Up":"Already registerd Sign in now"}
          
         </p>
      </form>

      
    </div>
  )
}

export default Login
