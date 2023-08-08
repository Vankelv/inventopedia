import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message,Space } from 'antd';


const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
}
const Navbar = () => {
  return (
    <div className="container desktop-nav">
      <div className="centered-div flex">
        <div className="logo">
    
        </div><li> 
         <a href="/">Home</a></li>
          <li>
            <a href="/inventions">Inventions</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        <div className="acount flex">
          <button className="login">
            <a href="/signIn">Login</a>
          </button>
          <button className="register">
            {" "}
            <a href="/sign-up">Create Account</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
