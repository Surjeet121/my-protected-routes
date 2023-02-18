import React, { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token === null || false) {
      navigate("/login");
    }
  }, []);

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
