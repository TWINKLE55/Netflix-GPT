import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // console.log(movieNames);
  return (
    <div className="p-6 bg-black bg-opacity-80 text-white font-bold text-2xl ">
      <div>
        {movieNames.map((movieNames, index) => {
          return (
            <MovieList
              key={movieNames}
              title={movieNames}
              movies={movieResults[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptSuggestions;
