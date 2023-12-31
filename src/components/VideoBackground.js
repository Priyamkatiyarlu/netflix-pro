import React from 'react';
import { useSelector } from 'react-redux';

const VideoBackground = () => {
    const trailerVideo = useSelector(store =>store.movies?.trailerVideo);
    
  return (
    <div>
       <iframe
  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&loop=1&controls=0&mute=1"}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
></iframe>
    </div>
  )
}

export default VideoBackground;