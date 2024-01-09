import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'
const MovieCard = ({poster_path}) => {
  return (
    <div className='w-32 md:w-40 pr-4 hover:scale-110 '>
      <img alt='Movie Card' src={CDN_IMG_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
