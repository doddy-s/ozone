import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/main.css";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Community, { communityLoader } from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import Splashscreen from "./pages/Splashscreen";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import Dashboard, { dashboarLoader } from "./layouts/Dashboard.jsx";
import Signin, { signinAction } from "./pages/Signin";
import Signup, { signupAction } from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splashscreen />,
  },
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboarLoader,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/popular", element: <Popular /> },
      {
        path: "/community",
        element: <Community />,
        loader: communityLoader,
        children: [

        ]
      },
      {
        path: "community/:communityId",
        element: <Community/>,
      },

      { path: "/marketplace", element: <Marketplace /> },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
    action: signinAction,
  },
  {
    path: "/signup",
    element: <Signup />,
    action: signupAction,
  },
  { path: "*", element: <NoPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
