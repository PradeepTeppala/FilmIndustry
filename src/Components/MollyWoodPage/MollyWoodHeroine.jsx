import React from "react";
import "./MollyWoodHeroine.css";
import { MollyWoodHeroinesData } from "../../Data/MollyWood/Heroines";

function MollyWoodHeroine() {
  return (
    <>
      <div className="heroines-title">
        <h2>MollyWood Heroine's</h2>
      </div>
      <div className="mollywoodhero-container">
        <div className="mollywood-heroines">
          {MollyWoodHeroinesData.map((Heroine) => (
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

export default MollyWoodHeroine;
