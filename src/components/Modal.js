// Modal.js

import React, { useState, useEffect } from 'react';
import MuiModal from "@mui/material/Modal";
import { CheckIcon, ThumbUpIcon, VolumeOffIcon, XIcon } from '@heroicons/react/outline';
import { VolumeUpIcon } from '@heroicons/react/solid';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeModal, removeModalData } from '../utils/modalSlice';
import { API_OPTIONS } from "../utils/constants";
import './Modal.css'; // Import the CSS file

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);
  const modalData = useSelector(state => state.modal.modalData);

  const [muted, setMuted] = useState(true);
  const [loadingTrailer, setLoadingTrailer] = useState(true);
  const [trailer, setTrailer] = useState(null);

  const handleClose = () => {
    // Close the modal and clear modal data
    dispatch(removeModal());
    dispatch(removeModalData());
    setTrailer(null);
    setLoadingTrailer(true);
  }

  const getMoviesFromVideos = async () => {
    try {
      // Fetch videos for the selected movie from the API
      const data = await fetch(`https://api.themoviedb.org/3/movie/${modalData?.id}/videos`, API_OPTIONS);
      const json = await data.json();

      // Prioritize trailers
      let filterData = json.results.filter((video) => video.type === "Trailer");

      if (filterData.length === 0) {
        // If no trailers found, consider teasers
        filterData = json.results.filter((video) => video.type === "Teaser");
      }

      if (filterData.length === 0) {
        // If still no trailers or teasers, consider the first video
        filterData = [json.results[0]];
      }

      // Set the selected trailer and mark loading as false
      const selectedTrailer = filterData[0];
      setTrailer(selectedTrailer);
      setLoadingTrailer(false);
    } catch (error) {
      // Handle errors while fetching trailer
      console.error("Error fetching trailer:", error);
      setLoadingTrailer(false);
    }
  };

  useEffect(() => {
    // Load trailer when modal is open and modal data is available
    if (showModal && modalData) {
      setLoadingTrailer(true);
      getMoviesFromVideos();
    }
  }, [showModal, modalData]);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>
          {loadingTrailer ? (
            <div className="absolute w-full h-full shimmer-container bg-[#181818] ">
              <div className="shimmer"></div>
              <div className="loading-text animate__animated animate__fadeIn animate__delay-1s">Loading Trailer</div>
            </div>
          ) : (
            <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : ''}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              playing
              muted={muted}
            />
              {/* Controls for the video player */}
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              {/* Play button */}
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>

              {/* Like button */}
              <button className="modalButton">
                <ThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
            {/* Mute/Unmute button */}
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

          )}
        {/* Additional information section */}
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            {/* Movie details */}
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
              {(modalData?.vote_average * 10).toFixed(2)}% Match
              </p>
              <p className="font-light">
                {modalData?.release_date || modalData?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            {/* Overview and additional information */}
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">
                {modalData?.overview}
              </p>
              <div className="flex flex-col space-y-3 text-sm">
                {/* Genres */}
                <div>
                  <span className="text-[gray]">Genres: </span>
                  Comedy
                </div>

                {/* Original language */}
                <div>
                  <span className="text-[gray]">Original language: </span>
                  {modalData?.original_language}
                </div>

                {/* Total votes */}
                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {modalData?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
