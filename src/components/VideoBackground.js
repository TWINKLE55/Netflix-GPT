import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  // console.log(id);
  useMovieTrailer(id);
  const trailerId = useSelector((store) => store.movies?.trailerId);
  // console.log(trailerId);
  return (
    <div className=" pt-32 bg-black md:pt-0 w-full">
      <iframe
        className="w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "/?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&controls=0&modestbranding=1&&cc_load_policy=0&playlist=" +
          trailerId
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
