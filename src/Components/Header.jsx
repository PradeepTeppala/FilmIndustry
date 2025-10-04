import React from "react";
import "./Header.css";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="title">
            <h1>FilmIndustry.com</h1>
          </div>
          <div className="header-menu">
            <Link to="/">Home</Link>
            <p>Industry</p>
            <p>Movies</p>
            <p>Webseries</p>
            <VscAccount className="Account" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
