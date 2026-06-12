import {
  useState,
  useContext
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext.jsx";

import "./Login.css";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useContext(
      CartContext
    );

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [error,
    setError] =
    useState("");

  const handleSubmit =
    (e) => {

      e.preventDefault();

      if (
        !email ||
        !password
      ) {

        setError(
          "Please fill all fields"
        );

        return;
      }

      login();

      navigate("/");
    };

  return (

    <div className="login-page">

      <form
        className="login-form"
        onSubmit={
          handleSubmit
        }
      >

        <h2>
          PawMart Login
        </h2>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;