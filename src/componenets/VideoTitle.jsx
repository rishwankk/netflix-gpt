import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' text-white pt-36 px-12 absolute bg-gradient-to-t from-black  w-screen  aspect-video'>
        <h1 className='text-6xl font-bold px-5'>{title}</h1>
        <p className='py-5 mx-5 text-lg w-1/3 '>{overview}</p>
        <div className="px-7">
            <button  className='bg-white text-black  w-20 rounded-lg p-2 hover:bg-slate-500  '> ▶️Play</button>
            <button className='mx-2 bg-gray-400 w-32 rounded-lg p-2  hover:bg-slate-700  ' > ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle