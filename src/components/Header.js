import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { appLogo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showGptSearch= useSelector(store=> store.gpt.showGptSearch)
  const user= useSelector(store=>store.user)
   const handleSignOut=()=>{
   signOut(auth)
   .then(() => {  })
    .catch((error) => {
      navigate("/error")
     });
  }
  useEffect(()=>{ 
    const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email, displayName } = user;
      dispatch(addUser({uid :uid, email :email, displayName :displayName}))
      navigate("/browse")    
     } else {
     dispatch(removeUser())
     navigate("/") 
      }
   });
   return ()=> unSubscribe()
  },[])
  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView())
  }
  return (
    <div className='fixed w-full  z-10  md:px-8  md:py-2 bg-black bg-gradient-to-t flex flex-col md:flex-row justify-between'> 
      <img className='w-32 md:w-40 ml-48 md:ml-0  '
      src={appLogo}
      alt='logo'/>
     { user && <div className=' h-9  mt-4 mr-3 flex'>
     <button className='bg-blue-600 text-white px-2 md:px-6 mr-8  rounded-lg ml-3' onClick={handleGptSearch}>
      {showGptSearch?"HomePage":"GPTSearch"}</button>

      <h3 className='text-red-500 font-bold text-lg mr-5 md:text-xl bg-gradient-to-t to-black'>{user?.displayName}</h3>
        <img alt='ICON_URL' className='md:ml-4 w-8 md:w-10 h-8 md:h-10' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'/>
        <button onClick={handleSignOut} className='ml-4 border-1 bg-black text-white px-3 font-bold rounded-lg'>SignOut</button>
        
      </div>
     }  
     </div>
  )
}

export default Header
