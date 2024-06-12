import React, { useRef, useState } from "react";
import { CheckValid } from "../utils/CheckValid";
import Header from "./Header";

const Login = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const [error,setError]=useState(null)
  const [isSignIn, setIsSignIn] = useState(true);
  const handleValid = () => {
   const message = CheckValid(Email.current.value,Password.current.value)
    console.log(message)
    setError(message)
  };
  
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div className="absolute">
        <Header />
        <img
          alt=""
          aria-hidden="true"
          data-uia="nmhp-card-hero+background+image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
        <h1 className="text-3xl my-3 font-bold  ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
      <form  onSubmit={(e) => e.preventDefault()} className="absolute mx-auto right-0 left-0 my-36 p-12 bg-black w-3/12 opacity-85 rounded-lg text-white">
        {!isSignIn && (
          <input
      
            className=" w-full rounded-lg my-3 p-3 bg-gray-900 "
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          ref={Email}
          className=" w-full rounded-lg my-3 p-3 bg-gray-900 "
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          ref={Password}
          className=" w-full rounded-lg my-3 p-3  bg-gray-900 "
          type="password"
          placeholder="Password"
          required
        />
        <p className=" text-red-700">{error}</p>
        <button
          onClick={handleValid}
          
          className=" w-full rounded-lg my-3 p-3 text-lg font-bold bg-red-700"
          typeof="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already a User.Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;
