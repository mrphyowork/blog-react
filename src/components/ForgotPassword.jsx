import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isDark, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await axios.post(
          "https://blog-olive-three-64.vercel.app/user/forgot-password",
          { email }
        );
        setMessage("Password reset link sent to your email!");
      } catch (err) {
        setMessage("Error sending reset link. Please try again.");
      }
    } else {
      setMessage("Please enter your email!");
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
        <h2 className="text-center mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && (
          <div
            className={`alert ${
              message.includes("sent") ? "alert-success" : "alert-danger"
            } mb-3`}
          >
            {message}
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Send Reset Link
        </button>
        <div className="text-center">
          <Link to="/login" className="text-decoration-none">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
