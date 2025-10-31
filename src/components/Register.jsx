import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { isDark, toggleTheme } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://blog-olive-three-64.vercel.app/user/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      alert("Registration successful! Please login.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      alert("Registration failed. Please try again.");
      console.error(err);
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
        <h2 className="text-center mb-4">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Register
        </button>
        <div className="text-center">
          <Link to="/login" className="text-decoration-none">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
