import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    <div  className='bg-black -z-40'>
    <div className="relative md:-mt-24 lg:-mt-52 pl-4 pb-24 lg:space-y-24 lg:pl-16 md:space-y-24 z-20 bg-gradient-to-t from-black bg-opacity-60  ">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.TopRated}/>
        <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
        <MovieList title={"Netflix Originals"} movies={movies.NetflixOriginals}/>
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer;