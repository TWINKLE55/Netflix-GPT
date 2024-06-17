import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    // console.log(user.photoURL);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute flex justify-between z-10 px-8 py-2 w-full  bg-gradient-to-b from-black">
      <img className=" w-40  " src={LOGO} alt="img" />

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
