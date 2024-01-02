import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useNetflixOriginals from '../hooks/useNetflixOriginals';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useNetflixOriginals();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
    
  )
}

export default Browse;