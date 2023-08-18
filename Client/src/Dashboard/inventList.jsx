import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import { Table } from "antd";

const InventList = () => {
  // GREETINGS
  const [greeting, setGreeting] = useState("");
  const [inventions, setInventions] = useState([]);

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

  useEffect(() => {
    fetch("https://who-invent-what-81au.vercel.app/inventions")
      .then((res) => res.json())
      .then((data) => setInventions(data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Invention Name",
      dataIndex: "inventionName",
    },
    {
      title: "Inventor",
      dataIndex: "inventor",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
  ];

  return (
    <div>
      <div className="main flex">
        <SideBar />

        <div className="middle">
          <div>
            <div className="header greeting">
              {greeting} Samuel! any invention today?{" "}
              <Link to="/Add-invention">Click</Link> to add an invention
            </div>
            <div className="inventions-list">
              <Table
                columns={columns}
                dataSource={inventions.map((invention, index) => ({
                  ...invention,
                  key: index,
                }))}
              />
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

export default InventList;
