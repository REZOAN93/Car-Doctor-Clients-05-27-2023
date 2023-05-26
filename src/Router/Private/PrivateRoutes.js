import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  let location = useLocation();

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoutes;
