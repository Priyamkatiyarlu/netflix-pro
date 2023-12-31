import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log("got movie list",movies);
  return (
    <div>
    <div>
        <h1>{title}</h1>
        <div>
        <MovieCard/>
        </div>
    </div>
    </div>
  )
}

export default MovieList;