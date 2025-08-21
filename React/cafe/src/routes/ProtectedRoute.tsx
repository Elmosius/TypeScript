import type { ReactNode } from "react";
import { getLocalStorage } from "../components/utils/storage.ts";
import { Navigate, useLocation } from "react-router-dom";

interface PropTypes {
  children: ReactNode;
}

const ProtectedRoute = (props: PropTypes) => {
  const { children } = props;
  const auth = getLocalStorage("auth");
  const currentRoute = useLocation().pathname;

  if (!auth && currentRoute !== "/login") {
    return <Navigate to={"/login"} replace />;
  }

  if (auth && currentRoute === "/login") {
    return <Navigate to={"/orders"} replace />;
  }

  if (auth && currentRoute === "/") {
    return <Navigate to={"/orders"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
