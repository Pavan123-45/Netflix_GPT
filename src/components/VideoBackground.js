import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks.js/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store?.movies?.trailerVideo);
  return (
    <div className='w-screen py-8 md:py-0 '>
     <iframe className='w-screen aspect-video ' 
     src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
     </iframe>
    </div>
  )
}


export default VideoBackground
