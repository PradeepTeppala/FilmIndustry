import React from "react";
import "./KollyWoodDirector.css";
import { KollyWoodDirectorsData } from "../../Data/KollyWood/Directors";

function KollyWoodDirector() {
  return (
    <>
      <div className="kollywoodhero-container">
        <div className="kollywood-directors">
          {KollyWoodDirectorsData.map((Director) => (
            <div key={Director.id}>
              <img src={Director.image} alt="" />
              <div className="hero-details">
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

export default KollyWoodDirector;
