import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUser,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";

const Dashboard = () => {
  const [greeting, setGreeting] = useState("");
  const [inventions, setInventions] = useState([]);
  const apiUrl = "https://who-invent-what-81au.vercel.app/";
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 1 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 14) {
      setGreeting("Good afternoon");
    } else if (currentTime >= 14 && currentTime <= 22) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, []);
  useEffect(() => {
    fetch(`${apiUrl}/inventions`)
      .then((res) => res.json())
      .then((data) => setInventions(data))
      .catch((err) => console.log(err));
  }, []);
  const currentYear = new Date().getFullYear();
  const startYear = 1995;
  const newInventionsCount = inventions.filter(
    (invention) => invention.year >= startYear && invention.year <= currentYear
  );
  const totalInventions = inventions.length;
  const newInventions = newInventionsCount.length;

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
            <div className="overview-cards flex">
              <div className="inventions  stats">
                <h4>Total Inventions</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faRocket} className="icons" />
                  </span>
                  {totalInventions}
                </p>
              </div>
              <div className="inventions  stats">
                <h4>New Inventions</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLightbulb} className="icons" />
                  </span>
                  {newInventions}
                </p>
              </div>
              <div className="active-users  stats">
                <h4>Active Users</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faUser} className="icons" />
                  </span>
                  567
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
