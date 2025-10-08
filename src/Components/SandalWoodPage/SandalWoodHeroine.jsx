import React from "react";
import "./SandalWoodHeroine.css";
import { SandalWoodHeroinesData } from "../../Data/SandleWood/Heroines";

function SandalWoodHeroine() {
  return (
    <>
      <div className="heroines-title">
        <h2>SandalWood Heroine's</h2>
      </div>
      <div className="sandalwoodhero-container">
        <div className="sandalwood-heroines">
          {SandalWoodHeroinesData.map((Heroine) => (
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

export default SandalWoodHeroine;
