import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='bg-gradient-to-r from-black w-screen aspect-video absolute'>
    <div className='pt-48 px-12 flex w-2/6 flex-col absolute text-white ' >
        <h1 className='text-4xl font-bold w-full'>{title}</h1>
        <p className='py-6 text-lg w-full'>{overview}</p>
        <div className=' py-3 text-lg'>
            <button className=' bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg'>Play</button>
            <button className='ml-2 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
    </div>
    
  )
}

export default VideoTitle;