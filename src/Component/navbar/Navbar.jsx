import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="text">
          {/* <Link to="/"> */}
          <span className="logo">Getjob</span>
          {/* </Link> */}
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
      <hr />
      <div className="menu">
        <span>test1</span>
        <span>test2</span>
      </div>
    </div>
  );
};

export default Navbar;
