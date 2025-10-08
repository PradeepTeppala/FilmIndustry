import React from "react";
import "./TollyWoodHeroine.css";
import { TollyWoodHeroinesData } from "../../Data/TollyWood/Heroines";

function TollyWoodHeroine() {
  return (
    <>
      <div className="heros-title">
        <h2>TollyWood Heroine's</h2>
      </div>
      <div className="tollywoodhero-container">
        <div className="tollywood-heroines">
          {TollyWoodHeroinesData.map((Heroine) => (
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

export default TollyWoodHeroine;
