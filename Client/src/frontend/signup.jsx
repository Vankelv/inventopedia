import React, { useState, useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ui/style.css";
import GoogleLogo from "./ui/gmail.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    lName: "",
    fName: "",
    email: "",
    userName: "",
    password: "",
  });
  // FORM CONTROL
  const handleLNameChange = (event) => {
    const { value } = event.target;
    setLName(value);
  };

  const handleFNameChange = (event) => {
    const { value } = event.target;
    setFName(value);
  };

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
  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedFormData = {
      fName,
      lName,
      email,
      userName,
      password,
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/Dashboard");
      });

    setLName("");
    setFName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="body signup flex">
      <div className="first-side"></div>
      <div className="account">
        <div className="form">
          {" "}
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <input
                type="text"
                id="fName"
                name="fName"
                placeholder="First Name:"
                value={fName}
                required
                onChange={handleFNameChange}
              />
            </div>
            <div className="fields">
              <input
                type="text"
                id="lName"
                name="Last Name"
                placeholder="Last Name"
                value={lName}
                onChange={handleLNameChange}
              />
            </div>

            <div className="fields">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="fields">
              <input
                type="text"
                id="userName"
                name="username"
                placeholder="username"
                value={userName}
                onChange={handleUsernameChange}
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
                Register
              </button>
            </div>
          </form>
          <p>
            Do have an account? <a href="/signIn">signin</a>{" "}
          </p>
          <p>or signup with</p>
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

export default SignUp;
