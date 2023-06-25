import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/main.css";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Community from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import Splashscreen from "./pages/Splashscreen";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import Dashboard, { dashboarLoader } from "./layouts/Dashboard.jsx";

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
      { path: "Home", element: <Home /> },
      { path: "Profile", element: <Profile /> },
      { path: "popular", element: <Popular /> },
      { path: "community", element: <Community /> },
      { path: "marketplace", element: <Marketplace /> },
    ],
  },
  { path: "*", element: <NoPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
