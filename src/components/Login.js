import React, { useRef, useState } from "react";
import { CheckValid } from "../utils/CheckValid";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const [error, setError] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const handleValid = () => {
    const message = CheckValid(Email.current.value, Password.current.value);
    setError(message);
    if (message) return;

    // segn in/sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: Name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/115078590?s=48&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setError("Error");
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("User Not Found!!");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("User Not Found!!");
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mx-auto right-0 left-0 my-36 p-12 bg-black w-3/12 opacity-85 rounded-lg text-white"
      >
        {!isSignIn && (
          <input
            ref={Name}
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
