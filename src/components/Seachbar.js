import React, { useEffect, useRef } from "react";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addGptMovies, toggleGptSearch } from "../utils/gptSlice";

const Seachbar = () => {
  const inputValue = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleGptSearch());
  }, []);
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
      ". only give me 5 movies name without year and dont give any other informtion just movie names , comma separated  like the example results given ahead example result : Gadder , sholay , Don , Golmaal , Koi Mil Gaya apart from names no other statements need not your extra statement follow my instruction strictly don't write no. in front of movie name";
    // const url = "https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "x-rapidapi-key": "08a99c1b92msha891b48911f4b0ap117753jsn394ba9148f04",
    //     "x-rapidapi-host": "chatgpt-gpt4-ai-chatbot.p.rapidapi.com",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: gptQuery,
    //   }),
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();

    // } catch (error) {
    //   console.error(error);
    // }

    const url = "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "08a99c1b92msha891b48911f4b0ap117753jsn394ba9148f04",
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.result);
      const gptMovies = result?.result?.split(",");
      // console.log(gptMovies);
      const promiseArray = gptMovies.map((movie) => fetchMovie(movie));
      const movies = await Promise.all(promiseArray);
      dispatch(addGptMovies({ movieNames: gptMovies, movieResults: movies }));
    } catch (error) {
      console.error(error);
    }
  };

  const langKey = useSelector((store) => store.config.identifier);
  // console.log(langKey);
  return (
    <div className=" flex pt-[40%] md:p-[10%]  justify-center items-center w-[100%] ">
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
