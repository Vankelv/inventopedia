import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormComponent from "./components/formSubmit";
import "./dashboard.css";
import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
const AddInvention = () => {
  // GREETINGS
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 1 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 16) {
      setGreeting("Good afternoon");
    } else if (currentTime >= 16 && currentTime <= 22) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, []);
  // GREETINGS END
  const [formData, setFormData] = useState({
    inventionName: "",
    inventor: "",
    year: "",
    category: "",
    country: "",
    image: null,
  });
  // IMAGE SELECT FIELD END
  return (
    <div>
      <div className="main flex">
        <SideBar />

        <div className="middle">
          <div className="stats-container">
            <div className="header greeting">
              {greeting} Samuel! any invention today?{" "}
              <Link to="/Add-invention">Click</Link> to add an invention
            </div>
            <FormComponent />
          </div>
        </div>
        <div className="right">
          <RightBar />
        </div>
      </div>
    </div>
  );
};
export default AddInvention;
