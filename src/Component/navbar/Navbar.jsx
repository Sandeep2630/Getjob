import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(true);

  const scrollShow = () => {
    window.screenY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollShow);
    return () => {
      window.addEventListener("scroll", scrollShow);
    };
  }, []);

  return (
    <div className={active ? "navbar active " : "navbar"}>
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

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test1</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
