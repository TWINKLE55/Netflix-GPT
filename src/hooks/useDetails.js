import { useEffect, useState } from "react";

import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";

const useMovieDetails = ({ id }) => {
  // const id = "665f511e176dc873953843e5";
  const [details, setDetails] = useState(null);
  const [credit, setCredits] = useState(null);
  const [similarMovie, setSimilarMovie] = useState(null);
  const dispatch = useDispatch();
  const moviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_Options
    );
    const json = await data.json();
    // console.log(json);
    setDetails(json);
    dispatch(toggleGptSearch());
  };
  const movieCredit = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      API_Options
    );
    const json = await data.json();
    // console.log(json);
    setCredits(json);
  };
  const similarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/similar?language=en-US",
      API_Options
    );
    const json = await data.json();
    // console.log(json);
    setSimilarMovie(json.results);
  };

  useEffect(() => {
    moviesData();
    similarMovies();
    movieCredit();
  }, []);
  return { details, similarMovie, credit };
};

export default useMovieDetails;
