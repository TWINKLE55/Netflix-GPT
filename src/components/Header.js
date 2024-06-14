import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
    console.log(user.photoURL);
  };
  return (
    <div className="absolute flex justify-between z-10 px-8 py-2 w-full bg-gradient-to-b from-black">
      <img
        className=" w-40  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="img"
      />

      {user && (
        <div className="flex">
          <img className="w-20 rounded-full" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="bg-red-600 p-2  text-white h-10 mt-3 text-center rounded-lg mx-2"
          >
            {"SignOut"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
