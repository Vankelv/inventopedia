import React, { useState, useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ui/style.css";
import GoogleLogo from "./ui/gmail.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  // FORM CONTROL
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  // SUBMIT FORM
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Rest of the code for handling the response
      // ...
    } catch (error) {
      console.error("Failed to make the sign-in request:", error);
    }
  };

  return (
    <div className="body signup flex">
      <div className="first-side"></div>
      <div className="account">
        <div className="form">
          <h1>SignIn</h1>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email or username"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="fields">
              <input
                type="Password"
                id="year"
                name="year"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="fields">
              <button type="submit" className="s-btn">
                Signin
              </button>
            </div>
          </form>
          <p>
            Don't have an account? <a href="/sign-up">Create one</a>{" "}
          </p>
          <p>or signin with</p>
          <div className="social-signup flex">
            <div className="btn">
              <button>
                <img
                  className="google-logo"
                  src={GoogleLogo}
                  alt="google logo"
                ></img>
              </button>
            </div>
            <div className="btn">
              <button>
                <FaFacebook size={20} className="fb-logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
