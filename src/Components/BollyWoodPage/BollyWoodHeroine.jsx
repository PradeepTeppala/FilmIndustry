import React from "react";
import "./BollyWoodHeroine.css";
import { BollyWoodHeroinesData } from "../../Data/BollyWood/Heroines";

function BollyWoodHeroine() {
  return (
    <>
      <div className="bollywoodhero-container">
        <div className="bollywood-heroines">
          {BollyWoodHeroinesData.map((Heroine) => (
            <div key={Heroine.id}>
              <img src={Heroine.image} alt="" />
              <div className="heroine-details">
                <h3>{Heroine.name}</h3>
                <a
                  href={Heroine.Link}
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

export default BollyWoodHeroine;
