import type { RouteObject } from "react-router-dom";
import Auth from "../components/layouts/Auth.tsx";
import Login from "../components/pages/Login.tsx";
import Register from "../components/pages/Register.tsx";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
