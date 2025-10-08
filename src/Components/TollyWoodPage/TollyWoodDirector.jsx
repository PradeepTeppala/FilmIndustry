import React from "react";
import { TollyWoodDirectorsData } from "../../Data/TollyWood/Directors";
import "./TollyWoodDirector.css";

function TollyWoodDirector() {
  return (
    <>
      <div className="directors-title">
        <h2>TollyWood Director's</h2>
      </div>
      <div className="tollywoodhero-container">
        <div className="tollywood-directors">
          {TollyWoodDirectorsData.map((Director) => (
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

export default TollyWoodDirector;
