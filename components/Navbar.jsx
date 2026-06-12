import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "./Navbar.css";

function Navbar() {

  const {
    requests,
    logout
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        🐾 PawMart
      </div>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/cart">
          Requests ({requests.length})
        </NavLink>

        <NavLink to="/checkout">
          Checkout
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;