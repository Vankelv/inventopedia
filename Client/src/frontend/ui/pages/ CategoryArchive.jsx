import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { Card, Pagination, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import inventionImage from "../portada.png";

const CategoryArchive = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `${category} | Inventopedia`;
  }, [location]);
  const { category } = useParams();
  const [inventions, setInventions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState([]); // Define rows state
  const itemsPerPage = 6; // Number of items to display per page
  const cardsPerRow = 3;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(
        `https://who-invent-what-81au.vercel.app/inventions/category/${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          setInventions(data);
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;

          if (Array.isArray(data)) {
            const paginatedInventions = data.slice(startIndex, endIndex);
            const newRows = [];
            for (let i = 0; i < paginatedInventions.length; i += cardsPerRow) {
              const row = paginatedInventions.slice(i, i + cardsPerRow);
              newRows.push(row);
            }
            setRows(newRows);
          } else {
            console.error("Fetched data is not an array.");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); // Set loading to false in case of an error
        });
    }, 2000);
  }, [currentPage]);

  // Pagination event handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <div className="inventions">
        <Spin
          spinning={loading}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        >
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
                      <button className="inventview">View</button>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Spin>
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

export default CategoryArchive;
