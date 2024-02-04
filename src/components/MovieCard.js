import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addModal, addModalData } from '../utils/modalSlice';
import { FaChevronDown, FaPlayCircle } from 'react-icons/fa';
import {PlusIcon, ThumbUpIcon} from '@heroicons/react/outline';

const MovieCard = ({ movie , isFirst, isLast}) => {
  const dispatch = useDispatch();
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };
  // Check if the movie object is defined
  if (!movie) {
    return (
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        {/* Placeholder or error message */}
        <p className="text-red-500">Movie data not available</p>
      </div>
    );
  }

  // Check if backdrop_path or poster_path is available in the movie object
  const imagePath = movie.backdrop_path || movie.poster_path;
  const movieTitle=movie.original_title;

  return (
    <div
      className="relative h-28 min-w-[180px]  cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-[1.4]"
      //className={`relative h-28 min-w-[180px]  cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]${hovering && 'md:scale-150'}`}
      style={{ zIndex: hovering ? 2 : 1 }}
      // onClick={() => {
      //   setCurrentMovie(movie)
      //   setShowModal(true)
      // }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        console.log(movie);
        dispatch(addModal());
        dispatch(addModalData(movie));
      } }
    >
      {!hovering &&<div className='drop-shadow-lg z-10'>
        <img
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt={movieTitle} // Provide a meaningful alt text
        className="rounded-sm object-cover md:rounded w-full h-full z-0"
      />

      </div> }
       {hovering && (
        <div className={`absolute -top-[60px] bg-[#181818] shadow-lg shadow-black rounded-sm h-60 z-50 ${
            isFirst ? 'left-11 -right-11' : isLast ? 'right-12 -left-12' : 'left-0'
          }`}>
        <img
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt={movieTitle} // Provide a meaningful alt text
        className="rounded-sm object-cover md:rounded w-full "
      /><div className='absolute w-full -mt-12 flex justify-between'>
      <div className='flex flex-row'>
      <button className='h-8 w-8 m-2'>
      <FaPlayCircle className='h-8 w-8'/>
      </button>
      <button className='hoverButton'>
      <PlusIcon className='h-6 w-6'/>
      </button>
      <button className='hoverButton'>
      <ThumbUpIcon className='h-6 w-6'/>
      </button>
      </div>

      <div>
      <button className='hoverButton'>
      <FaChevronDown className='h-6 w-6'/>
      </button>
      </div>
      </div>
      {/* info pannel */}
      <div className='w-full p-2'>
      <h1>
        {movieTitle}
      </h1>
      <div>
      <p className="font-semibold text-xs text-green-400">
              {(movie.vote_average * 10).toFixed(2)}% Match
              </p>
      </div>
      </div>
        </div>
)}
    </div>

  );
};

export default MovieCard;
