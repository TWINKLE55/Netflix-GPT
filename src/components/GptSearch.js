import React from "react";
import Search from "./Search";

import GptSuggestions from "./GptSuggestions";
import Header from "./Header";

const GptSearch = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="fixed  bg-black bg-opacity-80  -z-20">
          <img
            className=" fixed h-screen w-[100%] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          ></img>
        </div>
        <div className="">
          <Search />
          <GptSuggestions />
        </div>
      </div>
    </>
  );
};

export default GptSearch;
