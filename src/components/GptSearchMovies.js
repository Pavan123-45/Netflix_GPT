import React from 'react'
import { ICON_URL } from '../utils/constants'

const GptSearchMovies = () => {
  return (
    <div className='z-10  flex justify-center'>
      <div className='absolute '>
      <img src= {ICON_URL} className='h-screen object-cover w-screen '
      alt='background-img' />
      </div>
      <div className='z-10 w-1/2 bg-black mt-64 h-36 opacity-85 flex justify-center rounded-lg'>
        <h1 className='mt-14 text-3xl text-red-500 '>Already key limit exceeded..!!!</h1>
      </div>
     </div> 
  )
}

export default GptSearchMovies
