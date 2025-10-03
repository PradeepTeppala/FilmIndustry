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
          <div className="kollywoodheader-menu">
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

export default KollyWoodHeader;
