import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-logo">
          <h2>
            <span className="film">Film</span>
            <span className="industry">Industry</span>
            <span className="dot">.com</span>
          </h2>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/industry">Industry</Link></li>
            <li><Link to="/webseries">Webseries</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="contact-icon" /> Email: info@filmindustry.com</p>
          <p><FaMapMarkerAlt className="contact-icon" /> Location: Hyderabad, India</p>
        </div>


        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FilmIndustry.com All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
