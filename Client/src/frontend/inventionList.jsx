import React, { useState, useEffect } from "react";
import "./ui/style.css";
import { Card, Pagination } from "antd";
import Navbar from "./ui/components/navbar";
import inventionImage from "./ui/portada.png";

const InventionList = () => {
  const [inventions, setInventions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page
  const cardsPerRow = 3;

  useEffect(() => {
    fetch("http://localhost:8080/inventions")
      .then((res) => res.json())
      .then((data) => setInventions(data))
      .catch((err) => console.log(err));
  }, []);

  // Pagination event handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the sliced array of inventions based on the current page
  const paginatedInventions = inventions.slice(startIndex, endIndex);
  const rows = [];
  for (let i = 0; i < paginatedInventions.length; i += cardsPerRow) {
    const row = paginatedInventions.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  return (
    <div>
      <Navbar />
      <div className="inventions">
        <div className="cards-container">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="cards flex">
              {row.map((val) => (
                <div key={val.id} className="card-wrapper">
                  <Card className="details">
                    <img
                      className="invention_img"
                      src={inventionImage}
                      alt={`invention ${val + 1}`}
                    />
                    <p>
                      <strong>Inventor:</strong> {val.inventor}
                    </p>
                    <p>
                      <strong>Invention Name:</strong> {val.inventionName}
                    </p>
                    <p>
                      <strong>Country: </strong>
                      {val.country}
                    </p>
                    <p>
                      <strong>Year:</strong> {val.year}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={inventions.length}
          onChange={handlePageChange}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default InventionList;
