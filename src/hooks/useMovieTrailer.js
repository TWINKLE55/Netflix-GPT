import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerId } from "../utils/MovieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&page=1`,
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    const filterData = json.results.filter((movie) => movie.type == "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerId(trailer.key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
