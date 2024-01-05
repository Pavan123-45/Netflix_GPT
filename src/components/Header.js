import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user= useSelector(store=>store.user)
   const handleSignOut=()=>{
   signOut(auth)
   .then(() => {
     navigate("/")
     })
    .catch((error) => {
      navigate("/error")
     });
  }
  console.log(user?.displayName);
  return (
    <div className='absolute w-full z-10 px-8 py-2  bg-black opacity-75 flex justify-between'> 
      
      <img className='w-40 '
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'/>
     { user && <div className=' h-9  mt-4 mr-3 flex'>
      <h3 className='text-red-500 font-bold text-xl '>{user?.displayName}</h3>
        <img alt='usericon' className='ml-4' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'/>
        <button onClick={handleSignOut} className='ml-4 border-1 bg-black text-white px-3 font-bold rounded-lg'>Sign Out</button>
        
      </div>
     }  
     </div>
  )
}

export default Header
