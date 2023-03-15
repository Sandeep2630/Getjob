import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [seller, setSeller] = useState(true);
  const scrollShow = () => {
    console.log(" iam working");
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollShow);
    return () => {
      window.addEventListener("scroll", scrollShow);
    };
  }, []);
  console.log(active);
  const user = {
    id: 1,
    username: "john doe",
    isSeller: true,
  };

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
          <span>Get job Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in </span>
          {!user?.isSeller && (
            <>
              <span>Become a Seller</span>
              <button>Join</button>
            </>
          )}
          {user && (
            <>
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />

                <div className="options">
                  {user.isSeller && (
                    <>
                      <span>Gig</span>
                      <span>Add a Gig</span>
                    </>
                  )}

                  <span>Order</span>
                  <span>Message</span>
                  <span>Logout</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
