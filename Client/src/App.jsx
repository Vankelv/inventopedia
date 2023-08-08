import React from "react";
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
function App() {
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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
