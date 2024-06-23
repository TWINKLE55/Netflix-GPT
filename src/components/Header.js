import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { SupportedLang } from "../utils/lang";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const GptSearchValue = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleToggle = () => {
    dispatch(toggleGptSearch());
  };
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
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between z-30 px-10">
      <img className=" w-40  mx-auto md:mx-0" src={LOGO} alt="img" />

      {user && (
        <div className="flex justify-center">
          {/* <img className="w-20 rounded-full" src={user?.photoURL} /> */}

          <button
            onClick={handleToggle}
            className="bg-red-600 p-2  text-white h-10 mt-3 text-center rounded-lg mx-2"
          >
            {GptSearchValue ? "Home" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 p-2  text-white h-10 mt-3 text-center rounded-lg mx-2"
          >
            {"SignOut"}
          </button>
          {GptSearchValue && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white h-10 mt-3 rounded-lg mx-2 p-2"
            >
              {SupportedLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
