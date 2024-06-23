import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const dispatch = useDispatch();
  const nowTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_Options
    );
    // console.log(data);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    !trendingMovies && nowTrendingMovies();
  }, []);
};

export default useTrendingMovies;
