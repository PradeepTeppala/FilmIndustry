import React from "react";
import "./KollyWoodHeroine.css";
import { KollyWoodHeroinesData } from "../../Data/KollyWood/Heroines";

function KollyWoodHeroine() {
  return (
    <>
      <div className="heroines-title">
        <h2>KollyWood Heroine's</h2>
      </div>
      <div className="kollywoodhero-container">
        <div className="kollywood-heroines">
          {KollyWoodHeroinesData.map((Heroine) => (
            <div key={Heroine.id}>
              <img src={Heroine.image} alt="" />
              <div className="heroines-details">
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
