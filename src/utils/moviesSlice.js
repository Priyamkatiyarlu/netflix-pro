import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.PopularMovies =action.payload;
        },
        addNetflixOriginals: (state, action) =>{
            state.NetflixOriginals =action.payload;
        },
        addTopRated: (state, action) =>{
            state.TopRated =action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.UpcomingMovies =action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo = action.payload;
        },
    },
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addNetflixOriginals,addTopRated,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;