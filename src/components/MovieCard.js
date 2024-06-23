import React from "react";
import { Poster_link } from "../utils/constants";

const MovieCard = ({ img }) => {
  if (!img) return null;
  return (
    <div className="className=' w-36 md:w-48 pr-4 cursor-pointer hover:opacity-70 '">
      <img className="rounded-lg" alt="Movie-img" src={Poster_link + img} />
    </div>
  );
};

export default MovieCard;
