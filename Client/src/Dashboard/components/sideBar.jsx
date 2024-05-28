import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTachometerAlt,
  faRocket,
  faBars,
  faPlus,
  faGear,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import "../dashboard.css";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-contents">
          <div className="sidebar-head">
            <h4>Who Invent What</h4>
            <hr></hr>
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <FontAwesomeIcon icon={faTachometerAlt} className="icons" />
                <Link to="/Dashboard"> Dashboard</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faRocket} className="icons" />
                <a href="/invent-list"> Inventions</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPlus} className="icons" />
                <Link to="/Add-invention">Add new</Link>
              </li>
            </ul>
          </div>
          <div className="footer">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGear} className="icons" />
                <a href="#">Settings</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLockOpen} className="icons" />
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
