import React from 'react'

const ViedoTitle = ({original_title,overview}) => {
  return (
    <div className='pt-40 pl-24  absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='text-5xl font-bold  '>{original_title}</h1>
      <p className='w-1/4 pt-4  mt-4  '>{overview}</p>
      <button className=' font-bold text-xl mt-10  border bg-white text-black px-8 p-2 rounded-xl hover:bg-opacity-75'>Play</button>
      <button className='opacity-90 text-xl font-bold border ml-12 bg-gray-800 text-white px-12 p-2 rounded-xl hover:bg-opacity-75'>More Info</button>
    </div>
  )
}

export default ViedoTitle
