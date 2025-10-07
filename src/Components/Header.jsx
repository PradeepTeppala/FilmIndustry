import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>
          <span className="film">Film</span>
          <span className="industry">Industry</span>
          <span className="dot">.com</span>
        </h1>
      </div>

      <div className="nav-icons-container">
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/industry" className="nav-link">
            Industry
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
          <Link to="/webseries" className="nav-link">
            WebSeries
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>

        <div className="icons">
          <VscAccount className="icon account" />
        </div>
      </div>

      <div className="neon-line"></div>
    </header>
  );
}

export default Header;
