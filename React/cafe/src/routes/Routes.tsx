import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import ProtectedRoute from "./ProtectedRoute.tsx";
import ListOrder from "../components/pages/ListOrder";
import DetailOrder from "../components/pages/DetailOrder";
import CreateOrder from "../components/pages/CreateOrder";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <ListOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders/:id",
    element: (
      <ProtectedRoute>
        <DetailOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders/create",
    element: (
      <ProtectedRoute>
        <CreateOrder />
      </ProtectedRoute>
    ),
  },
];

export default routes;
