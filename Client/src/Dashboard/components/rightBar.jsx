import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo.jpeg";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../dashboard.css";

const RightBar = () => {
  return (
    <div>
      <div>
        <div className="profile">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <img className="profile-image" src={Logo} />
          <p>Kelvin Klutse</p>
        </div>
        <div className="card">
          <h4>Recent Activity</h4>
          <ul>
            <li>User A submitted a new invention</li>
            <li>User B edited an existing invention</li>
            <li>User C registered as a new user</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default RightBar;
