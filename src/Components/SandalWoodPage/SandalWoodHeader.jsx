import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./SandalWoodHeader.css";

function SandalWoodHeader() {
  return (
    <>
      <div className="sandalwoodheader-container">
        <div className="sandalwoodheader-content">
          <div className="title">
            <h1>SandalWood</h1>
          </div>
          <div className="sandalwoodheader-menu">
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

export default SandalWoodHeader;
