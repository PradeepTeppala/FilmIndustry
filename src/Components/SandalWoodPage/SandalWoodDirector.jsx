import React from "react";
import "./SandalWoodDirector.css";
import { SandalWoodDirectorsData } from "../../Data/SandleWood/Directors";

function SandalWoodDirector() {
  return (
    <>
      <div className="directors-title">
        <h2>SandalWood Director's</h2>
      </div>
      <div className="sandalwoodhero-container">
        <div className="sandalwood-directors">
          {SandalWoodDirectorsData.map((Director) => (
            <div key={Director.id}>
              <img src={Director.image} alt="" />
              <div className="directors-details">
                <h3>{Director.name}</h3>
                <a
                  href={Director.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SandalWoodDirector;
