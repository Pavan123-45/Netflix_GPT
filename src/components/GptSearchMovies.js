import React from 'react'
import { ICON_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const GptSearchMovies = () => {
  const navigate = useNavigate();
  const handleMovieSearch =()=>{
    navigate("/browse")

  }
  return (
    <div className='z-10  flex justify-center'>
      <div className='absolute '>
      <img src= {ICON_URL} className='h-screen object-cover w-screen '
      alt='background-img' />
      </div>
      <div className='z-10 w-1/2 bg-black mt-52 h-36 opacity-85 flex justify-center grid grid-flow-row rounded-lg'>
        <h1 className='mt-8 text-3xl text-red-600 '>Already key limit exceeded..!!!</h1>
        <button className='text-black bg-white rounded-lg mb-4' onClick={handleMovieSearch}>Back to Movie Search</button>
      </div>
     </div> 
  )
}

export default GptSearchMovies
