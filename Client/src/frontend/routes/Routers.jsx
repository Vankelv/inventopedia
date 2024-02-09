import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../ui/pages/home";
import Invention from "../ui/pages/inventionList";
import Dashboard from "../../Dashboard/dashboard";
import AddInvention from "../../Dashboard/addInvention";
import InventList from "../../Dashboard/inventList";
import SignUp from "../auth/signup";
import SignIn from "../auth/signin";
import Footer from "../ui/components/footer";
import InventionCategories from "../ui/pages/InventionCategories";
import MobileNav from "../ui/components/mobileNav";
import Blog from "../ui/pages/Blog";
import CategoryArchive from "../ui/pages/CategoryArchive";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories/:category" element={<CategoryArchive />} />
        </Routes>
        {isMobile && <MobileNav />}
        <Footer />
      </Router>
    </div>
  );
}

export default Routers;
