import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./components/sideBar";
import RightBar from "./components/rightBar";
import { Table, Button, Popconfirm, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


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
      dataIndex: "_id",
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
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
          title="Are you sure you want to delete this invention?"
          onConfirm={() => handleDelete(record.id)} 
          okText="Yes"
          cancelText="No"
           >
            <Button type="danger" icon={<DeleteOutlined/>} size="small">Delete</Button>
           </Popconfirm>
           <Link to={`/Edit-invention/${record.id}`}>
          <Button type="primary" icon={<EditOutlined />} size="small">
            Edit
          </Button>
        </Link>
        </Space>
      ),
    },
  ];
  //
  const handleDelete = (id) => {
    fetch(`https://who-invent-what-81au.vercel.app/inventions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete invention, status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setInventions((prevInventions) =>
          prevInventions.filter((invention) => invention.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting invention:", error);
      });
  };
  
  
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
