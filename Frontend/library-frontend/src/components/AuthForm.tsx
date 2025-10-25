import React, { useState } from "react";
import { RegisterData, LoginData } from "../types/User";
import "./AuthForm.css";

interface AuthFormProps {
  mode: "login" | "register";
  onSubmit: (data: RegisterData | LoginData) => void;
  onSwitchMode: () => void;
  error: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  onSubmit,
  onSwitchMode,
  error,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    usernameOrEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "register") {
      onSubmit({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
    } else {
      onSubmit({
        usernameOrEmail: formData.usernameOrEmail,
        password: formData.password,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <i className="fas fa-book-reader auth-icon"></i>
          <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
          <p>
            {mode === "login"
              ? "Login to manage your library"
              : "Register to get started"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="auth-error">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          {mode === "register" ? (
            <>
              <div className="form-group">
                <label htmlFor="username">
                  <i className="fas fa-user"></i> Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                  minLength={3}
                  maxLength={50}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="fas fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password (min 6 characters)"
                  required
                  minLength={6}
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="usernameOrEmail">
                  <i className="fas fa-user"></i> Username or Email
                </label>
                <input
                  type="text"
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  placeholder="Enter username or email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="fas fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="auth-submit-btn">
            <i
              className={
                mode === "login" ? "fas fa-sign-in-alt" : "fas fa-user-plus"
              }
            ></i>
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <button onClick={onSwitchMode} className="switch-btn">
              {mode === "login" ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
