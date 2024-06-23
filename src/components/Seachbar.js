import React, { useRef } from "react";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const Seachbar = () => {
  const inputValue = useRef(null);
  const dispatch = useDispatch();
  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json);
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(inputValue.current.value);

    const gptQuery =
      "Act as a movies recommendation system and suggest some movies for query" +
      inputValue.current.value +
      ". only give me 5 movies name without year and dont give any other informtion just movie names , comma separated  like the example results given ahead example result : Gadder , sholay , Don , Golmaal , Koi Mil Gaya apart from names no other statements need not your extra statement follow my instruction strictly ";

    const url =
      "https://openai-api-gpt-3-5-turbo.p.rapidapi.com/api/v1/chat/completions";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "ebe78595ccmshe4dbdb6beca195cp1b82f3jsn3cf5ce3e0b12",
        "x-rapidapi-host": "openai-api-gpt-3-5-turbo.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-7b",
        messages: [
          // {
          //   role: "assistant",
          //   content: gptQuery,
          // },
          {
            role: "user",
            content: gptQuery,
          },
        ],
        temperature: 0.5,
        top_p: 0.95,
        max_tokens: -1,
        use_cache: false,
        stream: false,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      const gptMovies = result?.choices[0]?.message?.content?.split(",");

      // console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => fetchMovie(movie));

      const movies = await Promise.all(promiseArray);
      // const movie = await fetchMovie(gptMovies[0]);
      dispatch(addGptMovies({ movieNames: gptMovies, movieResults: movies }));
      // console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };

  const langKey = useSelector((store) => store.config.identifier);
  // console.log(langKey);
  return (
    <div className=" flex pt-[40%] md:p-[10%]  justify-center items-center w-screen ">
      <form
        className="shadow-black shadow-2xl rounded-lg md:w-[65%] flex bg-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={inputValue}
          className="p-3 m-3 font-bold text-black  rounded-lg w-full  md:[75%] focus:outline-0 "
          type="text"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="bg-red-600 p-2 px-7 py-2  text-white h-10 mt-3 text-center rounded-lg mx-3"
          type="submit"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default Seachbar;
