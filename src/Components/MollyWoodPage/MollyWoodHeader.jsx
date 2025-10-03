import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./MollyWoodHeader.css";

function MollyWoodHeader() {
  return (
    <>
      <div className="mollywoodheader-container">
        <div className="mollywoodheader-content">
          <div className="title">
            <h1>MollyWood</h1>
          </div>
          <div className="mollywoodheader-menu">
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

export default MollyWoodHeader;
