import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddPost />,
      },
      {
        path: "/:id/edit",
        element: <EditPost />,
      },
      {
        path: "/:id",
        element: <Post />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
