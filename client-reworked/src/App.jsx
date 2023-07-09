import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";    
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home />,
      }
    ]
  },
]);
