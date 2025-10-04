import React from "react";
import "./SandalWoodHero.css";
import { SandalWoodHerosData } from "../../Data/SandleWood/Heros";

function SandalWoodHero() {
  return (
    <>
      <div className="sandalwoodhero-container">
        <div className="sandalwood-heros">
          {SandalWoodHerosData.map((Hero) => (
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

export default SandalWoodHero;
