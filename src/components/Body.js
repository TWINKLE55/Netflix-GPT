import React from "react";
import Login from "./Login";
import Browse from "./Browse";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import SepVideo from "./SepVideo";
import GptSearch from "./GptSearch";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/gpt",
      element: <GptSearch />,
    },
    {
      path: "/browse/sep/:id",
      element: <SepVideo />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
