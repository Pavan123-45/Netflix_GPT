import React from 'react'
import { useNavigate } from 'react-router-dom'

const GptSearchBar = () => {
  const navigate = useNavigate();
  const handleSearch=()=>{
     navigate("/searchmovie")
  }
  return (
    <div className=' md:pt-0 pt[10%] flex justify-center pt-36 pt-[180px] md:pt-36'>
      <form className='w-full md:w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
        <input className='p-4 m-4 col-span-9' 
        type='text' placeholder='What would you like watch today?' />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg'onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
