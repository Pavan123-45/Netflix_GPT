import React from 'react'
import GptSearchBar from './GptSearchBar'
import { ICON_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <> <div className='absolute -z-10  '>
    <img className='h-screen object-cover md:w-screen' src= {ICON_URL}
    alt='background-img' />
    </div>
    <div className=''>
      <GptSearchBar />
    </div></>
    
  )
}

export default GptSearch
