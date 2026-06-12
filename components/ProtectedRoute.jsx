import {
  Navigate
} from "react-router-dom";

import {
  useContext
} from "react";

import {
  CartContext
} from "../context/CartContext.jsx";

function ProtectedRoute({
  children
}) {

  const {
    isAuthenticated
  } = useContext(
    CartContext
  );

  return isAuthenticated
    ? children
    : <Navigate to="/login" />;
}

export default ProtectedRoute;