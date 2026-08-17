import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import tourismImage from "./tourism.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    return;
  }

  navigate("/");
};

  return (
    <div className="tourup-auth-page tourup-login-page">

      {/* LEFT SIDE */}
      <section className="tourup-auth-left">

        <div className="tourup-auth-form">

          {/* LOGO */}
          <div className="tourup-auth-logo">
            <span>🧭</span>
            <span>TourUP</span>
          </div>

          {/* HEADING */}
          <h1>Welcome Back!</h1>

          <p className="tourup-auth-subtitle">
            Login to explore the beauty of Uttar Pradesh
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="tourup-input-group">

              <label htmlFor="login-email">
                Email
              </label>

              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            {/* PASSWORD */}
            <div className="tourup-input-group">

              <label htmlFor="login-password">
                Password
              </label>

              <div className="tourup-password-wrapper">

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="tourup-password-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label="Show password"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>

            {/* FORGOT PASSWORD */}
            <div className="tourup-forgot">

              <a href="#">
                Forgot Password?
              </a>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="tourup-auth-button"
            >
              LOGIN
            </button>

          </form>

          {/* SIGNUP */}
          <p className="tourup-auth-switch">

            Don't have an account?

            <Link to="/signup">
              Sign Up
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

export default Login;