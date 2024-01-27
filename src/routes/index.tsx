import { createBrowserRouter, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { NotFound } from "../components/Error/404";
export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <NotFound />,
  },
]);
