import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  //   console.log({ title, overview });
  // const trailerId = useSelector((store) => store.movies.trailerId);
  return (
    <>
      {
        <div className="pt-[30%] md:pt-[20%] md:p-24 p-12  aspect-video absolute text-white bg-gradient-to-r from-black">
          <h1 className="lg:font-bold lg:text-4xl text-xl lg:mt-0 mt-[30%]">
            {title}
          </h1>
          <p className="text-lg font-medium  hidden lg:inline-block  w-1/2 mt-2 ">
            {overview}
          </p>

          <div className="">
            <button className="bg-white lg:text-xl text-black lg:font-bold lg:m-4 lg:px-6 lg:p-3 px-3 py-1 mt-2 rounded-lg hover:opacity-80">
              ▶️Play
            </button>
            <button className="bg-gray-500 text-xl hidden lg:inline-block  text-white font-bold m-4 px-6 p-3 opacity-60 rounded-lg hover:opacity-80">
              More Info
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default VideoTitle;
