import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerId } from "../utils/MovieSlice";

const useMovieTrailer = (id) => {
  // console.log(id);
  const dispatch = useDispatch();
  // const trailerId = useSelector((store) => store.movies.trailerId);
  const getMovieVideo = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&page=1`,
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    const filterData = json.results.filter((movie) => movie.type == "Trailer");
    console.log(filterData);
    const trailer = filterData.length
      ? filterData[Math.floor(Math.random() * filterData.length)]
      : json.results[0];
    console.log(trailer);
    dispatch(addTrailerId(trailer.key));
  };

  useEffect(() => {
    getMovieVideo(id);
  }, []);
};

export default useMovieTrailer;
