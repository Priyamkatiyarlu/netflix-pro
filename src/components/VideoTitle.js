import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='bg-gradient-to-r from-[#141414] bg-opacity-90 w-screen aspect-video absolute'>
    <div className='pt-24 md:pt-26 lg:pt-52 px-12 flex flex-col w-full absolute text-white ' >
        <h1 className='text-xl lg:text-5xl md:text-2xl font-bold w-full'>{title}</h1>
        <p className='py-6 max-w-xs text-xs md:max-w-lg md:text-md lg:max-w-xl lg:text-xl hidden md:block'>{overview}</p>
        <div className=' py-3 text-lg flex gap-2'>
            <button className='bannerButton bg-white text-black'>
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
            </button>
            {/* <button className='ml-2 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg'>More Info */}
            <button className="bannerButton bg-[gray]/70">More Info
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
            </button>
        </div>
    </div>
    </div>
    
  )
}

export default VideoTitle;