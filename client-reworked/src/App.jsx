import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";
import { Home } from "./pages/Home";
import { Splashscreen } from "./pages/Splashscreen";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splashscreen />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
