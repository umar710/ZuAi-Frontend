import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">ZUAi Blogs</h3>
        <p className="footer-description">
          A beautiful website footer that contains important links and social
          media icons.
        </p>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ZuAi Blogs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
