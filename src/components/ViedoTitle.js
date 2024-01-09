import React from 'react'

const ViedoTitle = ({original_title,overview}) => {
  return (
    <div className='pt-32 md:pt-40 pl-12 md:pl-24  absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='text-2xl md:text-5xl font-bold  '>{original_title}</h1>
      <p className='hidden md:block w-3/4 md:w-1/4 md:pt-4  mt-4  '>{overview}</p>
      <button className='hidden md:inline-block font-bold md:text-xl mt-4 md:mt-10  border bg-white text-black px-4 md:px-8 p-2 rounded-xl hover:bg-opacity-75'>Play</button>
      <button className='hidden md:inline-block opacity-90 md:text-xl  border ml-5 md:ml-12 bg-gray-800 text-white px-4 md:px-12 p-2 rounded-xl hover:bg-opacity-75'>More Info</button>
    </div>
  )
}

export default ViedoTitle
