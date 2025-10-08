import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./KollyWoodHeader.css";

function KollyWoodHeader() {
  return (
    <>
      <div className="kollywoodheader-container">
        <div className="kollywoodheader-content">
          <div className="title">
            <h1>KollyWood</h1>
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
        </div>
      </div>
    </>
  );
}

export default KollyWoodHeader;
