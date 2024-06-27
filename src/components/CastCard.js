import React from "react";
import { Poster_link } from "../utils/constants";

const CastCard = ({ img, id }) => {
  //   console.log(img, id);
  return (
    <div>
      {img && (
        <div
          id={id}
          className="className=' w-32 md:w-48 pr-4 cursor-pointer hover:opacity-70 '"
        >
          <img className="rounded-lg" alt="Movie-img" src={Poster_link + img} />
        </div>
      )}
    </div>
  );
};

export default CastCard;
