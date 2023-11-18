import React, { useState, useEffect, useRef } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import inventorsData from "../inventors.json";

const InventionList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="section">
        <h2>Search for your favourite Inventors</h2>
        <div className="search-container flex">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            id="searchInput"
            placeholder="Who invented computers..."
            className="search-input"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        <div className="inventors_container flex" id="inventorsContainer">
          {inventorsData
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.invention.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, index) => {
              return (
                <div className="cards flex" key={val.id}>
                  <div className="card">
                    <img className="invention_img" src={val.image} alt="" />
                    <div className="details">
                      <h2 className="inventorName">Inventor: {val.inventor}</h2>
                      <p>Invented: {val.invention}</p>
                      <p>Country: {val.country}</p>
                      <p>Year: {val.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InventionList;
