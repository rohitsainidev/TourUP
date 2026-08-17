import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

import tourismImage from "../Login/tourism.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }


   navigate("/login");
  };


  return (
    <div className="tourup-auth-page tourup-signup-page">

      {/* LEFT SIDE */}
      <section className="tourup-auth-left">

        <div className="tourup-auth-form">

          {/* LOGO */}
          <div className="tourup-auth-logo">
            <span>🧭</span>
            <span>TourUP</span>
          </div>


          {/* HEADING */}
          <h1>Create Account</h1>

          <p className="tourup-auth-subtitle">
            Join TourUP and start exploring Uttar Pradesh
          </p>


          {/* FORM */}
          <form onSubmit={handleSignup}>

            {/* NAME */}
            <div className="tourup-input-group">

              <label htmlFor="signup-name">
                Full Name
              </label>

              <input
                id="signup-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>


            {/* EMAIL */}
            <div className="tourup-input-group">

              <label htmlFor="signup-email">
                Email
              </label>

              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* PASSWORD */}
            <div className="tourup-input-group">

              <label htmlFor="signup-password">
                Password
              </label>

              <div className="tourup-password-wrapper">

                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="tourup-password-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="tourup-input-group">

              <label htmlFor="signup-confirm-password">
                Confirm Password
              </label>

              <input
                id="signup-confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="tourup-auth-button"
            >
              CREATE ACCOUNT
            </button>

          </form>


          {/* LOGIN LINK */}
          <p className="tourup-auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </section>


      {/* RIGHT SIDE IMAGE */}
      <section className="tourup-auth-right">

        <img
          src={tourismImage}
          alt="Uttar Pradesh Tourism"
        />

      </section>

    </div>
  );
};

export default Signup;