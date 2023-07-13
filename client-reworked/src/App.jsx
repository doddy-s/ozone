import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";
import { Home } from "./pages/Home";
import { Splashscreen } from "./pages/Splashscreen";
import { Profile } from "./pages/Profile";
import { Community } from "./pages/Community";
import { Popular } from "./pages/Popular";

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
        path: "popular",
        element: <Popular />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    async lazy() {
      const module = await import("./pages/Signin");
      return { element: <module.Signin /> };
    }
  },
]);
