import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("ADMIN_TOKEN");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
