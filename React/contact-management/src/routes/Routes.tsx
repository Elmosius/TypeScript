import { Navigate, type RouteObject } from "react-router-dom";
import Auth from "../components/layouts/Auth.tsx";
import Login from "../components/pages/Auth/Login.tsx";
import Register from "../components/pages/Auth/Register.tsx";
import Dashboard from "../components/layouts/Dashboard.tsx";
import ContactList from "../components/pages/Contact/ContactList.tsx";
import Profile from "../components/pages/Auth/Profile.tsx";
import ContactCreate from "../components/pages/Contact/ContactCreate.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/dashboard/contacts"} />,
  },
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
  {
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/contacts",
        element: <ContactList />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/contacts/create",
        element: <ContactCreate />,
      },
    ],
  },
];

export default routes;
