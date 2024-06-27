import React from "react";
import { Poster_link } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ img, id }) => {
  // console.log(id);
  if (!img) return null;
  // console.log(key);

  return (
    <Link to={`/browse/sep/${id}`}>
      <div
        id={id}
        className="className=' w-36 md:w-48 pr-4 cursor-pointer hover:opacity-70 '"
      >
        <img className="rounded-lg" alt="Movie-img" src={Poster_link + img} />
      </div>
    </Link>
  );
};

export default MovieCard;
