import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="text">
          <span className="logo">Getjob</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Getjob Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in </span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
