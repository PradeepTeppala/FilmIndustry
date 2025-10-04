import React from "react";
import "./KollyWoodHero.css";
import { KollyWoodHerosData } from "../../Data/KollyWood/Heros";

function KollyWoodHero() {
  return (
    <>
      <div className="kollywoodhero-container">
        <div className="kollywood-heros">
          {KollyWoodHerosData.map((Hero) => (
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

export default KollyWoodHero;
