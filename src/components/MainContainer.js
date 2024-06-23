import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // console.log(movies);
  if (!movies) return;
  const mainMovie = movies.length
    ? movies[Math.floor(Math.random() * movies.length)]
    : movies[0];
  // console.log(mainMovie);
  const { title, overview, id } = mainMovie;
  // console.log(id);
  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
