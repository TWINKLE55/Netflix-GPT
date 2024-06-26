import React, { useEffect, useRef, useState } from "react";
import { CheckValid } from "../utils/CheckValid";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Avtar_URL, BG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const checkUser = useSelector((store) => store.user);
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const [error, setError] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkUser) {
      navigate("/browse");
    }
  });
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
            photoURL: Avtar_URL,
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
            })
            .catch((error) => {
              setError("Error");
            });
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
      <div className=" w-screen h-screen">
        <div className="absolute w-[100%] h-[100%] object-cover">
          <Header />
          <img
            className="h-screen object-cover w-[100%]"
            alt=""
            aria-hidden="true"
            data-uia="nmhp-card-hero+background+image"
            src={BG_URL}
          ></img>
        </div>
        <div className="absolute mx-auto right-0 left-0 my-36 p-12 bg-black   w-[70%]  md:w-3/12 opacity-85 rounded-lg text-white">
          <h1 className="text-3xl my-3 font-bold  ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
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
        </div>
      </div>
    </>
  );
};

export default Login;
