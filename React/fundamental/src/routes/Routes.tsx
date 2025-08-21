import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home";
import Menu from "../components/pages/Menu";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu/:id",
    element: <Menu />,
  },
];

export default routes;
