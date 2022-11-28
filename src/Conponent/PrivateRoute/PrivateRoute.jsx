import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authcontext/ContextProvider";
import Spinner from "../Pages/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);

  if (loading) return <Spinner />;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
