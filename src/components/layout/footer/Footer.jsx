import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>enfold detroit</h3>
            <p>4870 Cass Ave</p>
            <p>Detroit, MI, United States</p>
            <p>(555) 389 976</p>
            <Link to="#" className="text-white">
              detroit@enfold-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>enfold dallas</h3>
            <p>11311 Harry Hines Blvd</p>
            <p>Dallas, TX, United States</p>
            <p>(555) 389 976</p>
            <Link to="#" className="text-white">
              dallas@enfold-restaurant.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
