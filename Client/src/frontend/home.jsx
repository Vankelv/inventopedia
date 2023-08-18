import React, { useState, useEffect } from "react";
import "./ui/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import inventionImage from "./ui/portada.png";
import Navbar from "./ui/components/navbar";

function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [latestInventions, setLatestInventions] = useState([]);
  


  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;

    const searchKeywords = search.toLowerCase().split(" "); // Split search into keywords
    

    fetch(`https://who-invent-what-81au.vercel.app/inventions?search=${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Invalid response data format");
        }

        const filteredResults = data.filter((item) => {
          const inventionName = item?.inventionName?.toLowerCase();
          const inventor = item?.inventor?.toLowerCase();

          // Check if any keyword is present in the invention or inventor fields
          return searchKeywords.some(
            (keyword) =>
              inventionName?.includes(keyword) || inventor?.includes(keyword)
          );
        });

        const searchInfo = {
          totalhits: filteredResults.length,
        };
        setResults(filteredResults);
        setSearchInfo(searchInfo);
        setSearchPerformed(true);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };
  // LATEST INVENTIONS
  useEffect(() => {
    fetch("https://who-invent-what-81au.vercel.app/inventionsByYear?year=2015&limit=3")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched latest inventions:", data);
        setLatestInventions(data);
        console.log("latestInventions state after setting:", latestInventions);
      })
      .catch((error) => {
        console.error("Error fetching latest inventions:", error);
      });
  }, []);
  
  
  return (
    <div>
      <Navbar />
      <div className="section">
        <h2>Search for your favourite Inventors</h2>
        <form className="search-container flex" onSubmit={handleSearch}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="search-input"
            id="searchInput"
            placeholder="Who invented computers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {searchInfo.totalhits ? (
          <p className="resultcount">Search Results: {searchInfo.totalhits}</p>
        ) : null}
      </div>
      <div className="home">
        <div className="results">
          {searchPerformed && results.length === 0 ? (
            <p className="resultcount">No result matches your search</p>
          ) : (
            <div
              className={`result-container ${
                results.length <= 2 ? "one-result" : ""
              }`}
            >
              {results.map((result, i) => (
                <div className="result" key={i}>
                  <div className="details">
                    <img
                      className="invention_img"
                      src={inventionImage}
                      alt={`invention ${i + 1}`}
                    />
                    <p>
                      <strong>Invention:</strong> {result.inventionName}
                    </p>
                    <p className="inventorName">
                      <strong>Invented By: </strong>
                      {result.inventor}
                    </p>
                    <p>
                      <strong>Country:</strong> {result.country}
                    </p>
                    <p>
                      <strong>Year: </strong>
                      {result.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="section">
        <div className="heading">
          <h2 className="heading">Latest Inventors</h2>
          <hr className="solid"></hr>
        </div>
        <div className="cards ltIn">
          {latestInventions.length > 0 ? (
            latestInventions.map((invention, i) => (
              <div className="card" key={i}>
                <img
                  className="invention_img"
                  src={inventionImage}
                  alt={`invention ${i + 1}`}
                />
                <div className="details">
                  <h2 className="inventorName">
                    Inventor: {invention.inventor}
                  </h2>
                  <p>Invented: {invention.inventionName}</p>
                  <p>Date: {invention.year}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No latest inventions found from the year 2014 and above.</p>
          )}
        </div>
        <button className="read_more">
          <a href="/inventions">Take a look at more inventions</a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;
