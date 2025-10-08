import React from "react";
import "./TollyWoodHero.css";
import { TollyWoodHerosData } from "../../Data/TollyWood/Heros";

function TollyWoodHero() {
  return (
    <>
      <div className="heros-title">
        <h2>TollyWood Hero's</h2>
      </div>
      <div className="tollywoodhero-container">
        <div className="tollywood-heros">
          {TollyWoodHerosData.map((Hero) => (
            <div key={Hero.id}>
              <img src={Hero.image} alt="" />
              <div className="heros-details">
                <h3>{Hero.name}</h3>
                <a href={Hero.Link} target="_blank" rel="noopener noreferrer">
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

export default TollyWoodHero;
