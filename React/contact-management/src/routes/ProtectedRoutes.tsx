import type { ReactNode } from "react";
import { getLocalStorage } from "../utils/storage.ts";
import { Navigate, useLocation } from "react-router-dom";

interface PropTypes {
  children: ReactNode;
}

const ProtectedRoute = (props: PropTypes) => {
  const { children } = props;
  const auth = getLocalStorage("token");
  const currentRoute = useLocation().pathname;

  if (
    !auth &&
    currentRoute !== "/auth/login" &&
    currentRoute !== "/auth/register"
  ) {
    return <Navigate to={"/login"} replace />;
  }

  if (
    (auth && currentRoute === "/auth/login") ||
    (currentRoute === "/auth/register" && auth)
  ) {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
