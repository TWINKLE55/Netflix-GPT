import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";
const useNowPopularMovies = () => {
  const NowPopularMovies = useSelector(
    (store) => store.movies.nowPopularMovies
  );
  const dispatch = useDispatch();
  const nowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_Options
    );
    // console.log(data);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPopularMovies(json.results));
  };
  useEffect(() => {
    !NowPopularMovies && nowPopularMovies();
  }, []);
};

export default useNowPopularMovies;
