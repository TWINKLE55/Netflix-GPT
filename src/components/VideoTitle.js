import React from "react";

const VideoTitle = ({ title, overview }) => {
  //   console.log({ title, overview });
  return (
    <>
      <div className="pt-[20%] p-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-4xl ">{title}</h1>
        <p className="text-lg font-medium w-1/2 mt-2 ">{overview}</p>

        <div className="mx-16">
          <button className="bg-white text-xl text-black font-bold m-4 px-6 p-3  rounded-lg hover:opacity-80">
            ▶️Play
          </button>
          <button className="bg-gray-500 text-xl text-white font-bold m-4px-6 p-3 opacity-60 rounded-lg hover:opacity-80">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
