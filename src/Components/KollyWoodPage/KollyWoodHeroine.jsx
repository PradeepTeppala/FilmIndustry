import React from "react";
import "./KollyWoodHeroine.css";
import { KollyWoodHeroinesData } from "../../Data/KollyWood/Heroines";

function KollyWoodHeroine() {
  return (
    <>
      <div className="kollywoodhero-container">
        <div className="kollywood-heroines">
          {KollyWoodHeroinesData.map((Heroine) => (
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

export default KollyWoodHeroine;
