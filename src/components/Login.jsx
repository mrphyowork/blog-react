import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isDark, toggleTheme } = useTheme();

  const getEmail = useRef();
  const getPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const user = await axios.post(
          "https://blog-olive-three-64.vercel.app/user/login",
          {
            email,
            password,
          }
        );
        const token = user.data.accessToken;
        localStorage.setItem("token", token);
        handleLogin();
      } catch (err) {
        alert("email or password are incorrect!");
        // console.error(err);
      }
    } else if (email) {
      alert("Please enter password!");
    } else {
      alert("Please enter email!");
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
      } min-vh-100 d-flex align-items-center justify-content-center`}
    >
      <button
        className={`btn ${
          isDark ? "btn-light" : "btn-dark"
        } position-fixed top-0 end-0 m-3`}
        onClick={toggleTheme}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
      <form
        onSubmit={handleSubmit}
        className={`w-25 border p-4 rounded ${
          isDark
            ? "bg-dark text-light border-light"
            : "bg-light text-dark border-dark"
        }`}
      >
        <h2 className="text-center mb-4">Login</h2>
        <input
          ref={getEmail}
          type="email"
          placeholder="Email"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={getPassword}
          type="password"
          placeholder="Password"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>
        <div className="text-center mb-2">
          <Link to="/forgot-password" className="text-decoration-none small">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center">
          <Link to="/register" className="text-decoration-none">
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
