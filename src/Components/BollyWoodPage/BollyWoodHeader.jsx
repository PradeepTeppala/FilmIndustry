import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./BollyWoodHeader.css";

function BollyWoodHeader() {
  return (
    <>
      <div className="bollywoodheader-container">
        <div className="bollywoodheader-content">
          <div className="title">
            <h1>BollyWood</h1>
          </div>
          <div className="bollywoodheader-menu">
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

export default BollyWoodHeader;
