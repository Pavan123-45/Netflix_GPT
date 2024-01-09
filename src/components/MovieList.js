import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className=' md:-mt-1 md:my-1 my-60 px-6 h-3 md:h-80 '>
        <h1 className='text-lg md:text-2xl  py-4 text-white '>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar '>
        <div className='flex ' >
            {movies?.map(movie=><MovieCard key={movie.id} poster_path={movie?.poster_path}/>)}
        </div>
       </div>
    </div>
  )
}

export default MovieList
