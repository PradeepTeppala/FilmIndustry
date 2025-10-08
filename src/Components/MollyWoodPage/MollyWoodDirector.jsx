import React from "react";
import "./MollyWoodDirector.css";
import { MollyWoodDirectorsData } from "../../Data/MollyWood/Directors";

function MollyWoodDirector() {
  return (
    <>
      <div className="directors-title">
        <h2>MollyWood Director's</h2>
      </div>
      <div className="mollywoodhero-container">
        <div className="mollywood-directors">
          {MollyWoodDirectorsData.map((Director) => (
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

export default MollyWoodDirector;
