import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./frontend/home";
import Invention from "./frontend/inventionList";
import Dashboard from "./Dashboard/dashboard";
import AddInvention from "./Dashboard/addInvention";
import InventList from "./Dashboard/inventList";
import SignUp from "./frontend/signup";
import SignIn from "./frontend/signin";
import Footer from "./frontend/ui/components/footer";
import InventionCategories from "./frontend/InventionCategories";
import MobileNav from "./frontend/ui/components/mobileNav";
import Blog from "./frontend/Blog";
function Routers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventions" element={<Invention />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Add-invention" element={<AddInvention />} />
          <Route path="/invent-list" element={<InventList />} />
          <Route path="/categories" element={<InventionCategories />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/blog" element={< Blog/>} />
        </Routes>
        {isMobile && <MobileNav />}
        <Footer />
      </Router>
    
    </div>
  );
}

export default Routers;
