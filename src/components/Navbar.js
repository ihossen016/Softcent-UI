import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo-v2 1.png" alt="logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Premium Products</a>
        <a href="#">Blog</a>
      </div>
      <div className="nav-btn">
        <button>Start a Project</button>
      </div>
    </nav>
  );
};

export default Navbar;
