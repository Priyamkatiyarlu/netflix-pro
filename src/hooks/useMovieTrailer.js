import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ()=>{
    const dispatch=useDispatch();
    const getMoviesFromVideos= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/848326/videos', API_OPTIONS);
        const json = await data.json();
        console.log("All videos:", json.results);

    // Prioritize trailers
    let filterData = json.results.filter((video) => video.type === "Trailer");

    // If no trailers found, consider teasers
    if (filterData.length === 0) {
      filterData = json.results.filter((video) => video.type === "Teaser");
      console.log("Teasers:", filterData);
    }

    // If still no trailers or teasers, consider the first video
    if (filterData.length === 0) {
      console.log("No trailers or teasers, assigning the first video");
      filterData = [json.results[0]];
    }
        const trailer= filterData[0];
        console.log(json);
        console.log("trailor",trailer);
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMoviesFromVideos();
    },[]);
}
export default useMovieTrailer;