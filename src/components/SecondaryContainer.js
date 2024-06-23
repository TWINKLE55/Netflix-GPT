import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  // console.log(movies);
  return (
    <div className="bg-black ">
      {movies && (
        <div className=" mt-0 lg:-mt-[205px] relative z-50">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.nowPopularMovies} />
          <MovieList title={"Upcoming Shows"} movies={movies?.upcomingMovies} />
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
