import React, { useEffect } from "react";
import Header from "./Header";
import useMovieDetails from "../hooks/useDetails";
import { Poster_link } from "../utils/constants";
import CastCard from "./CastCard";
import { useParams } from "react-router-dom";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch, toggleGptSearchTrue } from "../utils/gptSlice";
const SepVideo = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { details, similarMovie, credit } = useMovieDetails(id);
  const langKey = useSelector((store) => store.config.identifier);
  useEffect(() => {
    dispatch(toggleGptSearchTrue());
  }, []);
  // console.log(details);
  // console.log(credit?.cast);
  // console.log(similarMovie);

  return (
    <>
      <Header />
      <div className="bg-black">
        {details && (
          <div className="flex bg-black">
            <div className="w-screen h-screen ">
              <img
                className="w-screen object-cover h-[90%] "
                src={Poster_link + details.backdrop_path}
              />
            </div>
            <div className="absolute bg-gradient-to-t from-black z-20 pt-[30%] md:pt-[7%] md:p-24 p-12  h-[100%] text-white aspect-video w-[100%] ">
              <h1 className="lg:font-bold lg:text-2xl text-lg lg:mt-0 ">
                {details.title}
              </h1>
              <h1 className="lg:font-bold lg:text-2xl text-lg lg:mt-0">
                {details.popularity} Rating
              </h1>
              <p className="text-lg font-medium  hidden lg:inline-block  w-1/2 mt-2 ">
                {details.overview}
              </p>
            </div>
          </div>
        )}

        {credit && (
          <>
            <div className="bg-black">
              <h1 className="text-4xl font-bold mb-14 text-white">
                {lang[langKey].cast}
              </h1>
              <div
                // key={movies.id}
                className="flex overflow-x-scroll h-38 no-scrollbar  scrollbar-hide relative "
              >
                <div className="flex ">
                  {credit?.cast?.map((cast) => (
                    <CastCard
                      key={cast.id}
                      img={cast.profile_path}
                      id={cast.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {similarMovie && (
          <>
            <div className="bg-black pt-12">
              <h1 className="text-4xl font-bold mb-14 text-white">
                {lang[langKey].similarMovies}
              </h1>
              <div
                // key={movies.id}
                className="flex overflow-x-scroll h-38 no-scrollbar  scrollbar-hide relative "
              >
                <div className="flex ">
                  {similarMovie?.map((movie) => (
                    <CastCard
                      key={movie.id}
                      img={movie.poster_path}
                      id={movie.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SepVideo;
