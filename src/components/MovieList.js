import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  

  // Check if movies is not null before mapping
  if (!movies) {
    return (
      <div className="h-40 space-y-0.5 md:space-y-2" >
        <h2 className="w-56 cursor-pointer text-sm font-semibold z-0 text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl relative">
          {title}
        </h2>
        <p className="text-red-500">Movies data not available</p>
      </div>
    );
  }

  return (

    <div className="h-40 space-y-0.5 md:space-y-2 relative overflow-y-visible" style={{ position: 'relative', zIndex: 1}}>
      <h2 className="w-56 z-0 text-sm font-semibold text-[#e5e5e5] md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="h-[370px] mt-[-120px] flex items-center z-0 space-x-0.5 overflow-x-scroll overflow-y-visible scrollbar-hide md:space-x-2.5 md:p-2 relative"
          style={{ zIndex: 1 }}
        >
          {/* {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> */}
        {movies.map((movie, index) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      isFirst={index === 0}
      isLast={index === movies.length - 1}
    />
  ))} </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
    
  );
};

export default MovieList;

