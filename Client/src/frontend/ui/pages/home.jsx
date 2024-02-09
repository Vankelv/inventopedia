import React, { useState, useEffect } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import inventionImage from "../imgs/portada.png";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Home | Inventopedia ";
  }, [location]);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [latestInventions, setLatestInventions] = useState([]);

  const apiUrl = "http://localhost:8080";

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;

    const searchKeywords = search.toLowerCase().split(" "); // Split search into keywords

    fetch(`${apiUrl}/inventions?search=${search}`)
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
        // console.error("Error fetching search results:", error);
      });
  };
  // LATEST INVENTIONS
  useEffect(() => {
    fetch(`${apiUrl}/inventionsByYear?year=2014&limit=4`)
      .then((response) => response.json())
      .then((data) => {
        setLatestInventions(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="section">
        <h2 style={{ padding: "20px" }}>
          Search for your favourite Inventions{" "}
        </h2>
        <p
          style={{
            marginTop: "-20px",
          }}
        >
          Discover the world of inventions and who is behind them and their
          creation date
        </p>

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
                <div className="row result" key={i}>
                  <div className="col details">
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
                    <button className="inventview">View</button>
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
                  <button className="inventview">View</button>
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
