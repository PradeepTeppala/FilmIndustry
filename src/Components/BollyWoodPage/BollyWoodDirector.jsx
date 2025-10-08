import React from "react";
import "./BollyWoodDirector.css";
import { BollyWoodDirectorsData } from "../../Data/BollyWood/Directors";

function BollyWoodDirector() {
  return (
    <>
      <div className="directors-title">
        <h2>BollyWood Director's</h2>
      </div>
      <div className="bollywoodhero-container">
        <div className="bollywood-directors">
          {BollyWoodDirectorsData.map((Director) => (
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

export default BollyWoodDirector;
