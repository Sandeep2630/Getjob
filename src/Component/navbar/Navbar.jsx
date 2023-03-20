import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isGigOpen, setIsGigOpen] = useState(false);
  const { pathname } = useLocation();

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
    <div className={active || pathname != "/" ? "navbar active " : "navbar"}>
      <div className="container">
        <div className="text">
          <Link to="/" className="link">
            <span className="logo">Getjob</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link className="link">Get job Business</Link>
          <Link className="link">Explore</Link>
          <Link className="link">English</Link>
          <Link className="link">Sign in </Link>
          {!user?.isSeller && (
            <>
              <Link>Become a Seller</Link>
              <button>Join</button>
            </>
          )}
          {user && (
            <>
              <div
                onClick={() => {
                  setIsGigOpen((s) => !s);
                }}
                className="user"
              >
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div>dave</div>
                {isGigOpen && (
                  <div className="options">
                    {user.isSeller && (
                      <>
                        <Link className="link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add a Gig
                        </Link>
                      </>
                    )}

                    <Link to="/orders" className="link">
                      Order
                    </Link>
                    <Link to="/messages" className="link">
                      Message
                    </Link>
                    <Link to="/" className="link">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {active ||
        (pathname != "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        ))}
    </div>
  );
};

export default Navbar;
