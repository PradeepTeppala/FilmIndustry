import React from "react";
import "./BollyWoodHero.css";
import { BollyWoodHerosData } from "../../Data/BollyWood/Heros";

function BollyWoodHero() {
  return (
    <>
      <div className="bollywoodhero-container">
        <div className="bollywood-heros">
          {BollyWoodHerosData.map((Hero) => (
            <div key={Hero.id}>
              <img src={Hero.image} alt="" />
              <div className="hero-details">
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
