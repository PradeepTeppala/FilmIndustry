import React from "react";
import "./BollyWoodHero.css";
import { BollyWoodHerosData } from "../../Data/BollyWood/Heros";

function BollyWoodHero() {
  return (
    <>
      <div className="heros-title">
        <h2>BollyWood Hero's</h2>
      </div>
      <div className="bollywoodhero-container">
        <div className="bollywood-heros">
          {BollyWoodHerosData.map((Hero) => (
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

export default BollyWoodHero;
