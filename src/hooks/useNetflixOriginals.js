import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNetflixOriginals } from '../utils/moviesSlice';
const useNetflixOriginals =()=>{
    const dispatch = useDispatch();
  const getNetflixOriginals= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/discover/movie?with_networks=213&page=2', API_OPTIONS);
    const json=await data.json();
    console.log("Netflix originals",json.results);
    dispatch(addNetflixOriginals(json.results));
  }
  useEffect(()=>{
    getNetflixOriginals();
  },[]);
}
  export default useNetflixOriginals;