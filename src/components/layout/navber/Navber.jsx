import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logoIcon.png";
import "./Navber.css";

const Navbar = () => {
// -------------------header color----------------------
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor);
// --------------------nav menu---------------------------
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={color ? "header header-bg" : 'header'}>
      <div className="container">
        <div className="nav-bar">
{/* -----------nav logo--------------- */}
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>
{/* --------------nav menu----------------- */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
{/* ---------------nav button------------------ */}
            <li onClick={handleClick}>
              <button>Order now</button>
            </li>
          </ul>
{/* ---------------bars---------------- */}
          <div className="mini-screen-bars" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
