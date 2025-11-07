import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { isDark, toggleTheme } = useTheme();
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      await axios.post(
        "https://blog-olive-three-64.vercel.app/user/reset-password",
        { token, password }
      );
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("Error resetting password. Please try again.");
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
        <h2 className="text-center mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {message && (
          <div
            className={`alert ${
              message.includes("successful") ? "alert-success" : "alert-danger"
            } mb-3`}
          >
            {message}
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Reset Password
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

export default ResetPassword;
