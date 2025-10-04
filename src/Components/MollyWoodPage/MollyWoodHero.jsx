import React from "react";
import "./MollyWoodHero.css";
import { MollyWoodHerosData } from "../../Data/MollyWood/Heros";

function MollyWoodHero() {
  return (
    <>
      <div className="mollywoodhero-container">
        <div className="mollywood-heros">
          {MollyWoodHerosData.map((Hero) => (
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

export default MollyWoodHero;
