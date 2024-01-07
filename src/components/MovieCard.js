import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'
const MovieCard = ({poster_path}) => {
    // console.log(movies);
    // const{poster_path }=movies;
    console.log(poster_path );
  return (
    <div className='w-40 pr-4 '>
      <img alt='Movie Card' src={CDN_IMG_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
