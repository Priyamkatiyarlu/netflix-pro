import React from 'react';

const MovieCard = ({ movie }) => {
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

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      // onClick={() => {
      //   setCurrentMovie(movie)
      //   setShowModal(true)
      // }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt={movie.title} // Provide a meaningful alt text
        className="rounded-sm object-cover md:rounded w-full h-full"
      />
    </div>
  );
};

export default MovieCard;
