import React from "react";
import "./TollyWoodHeroine.css";

import { TollyWoodHeroinesData } from "../../Data/TollyWood/Heroines";

function TollyWoodHeroine() {
  return (
    <>
      <div className="tollywoodhero-container">
        <div className="tollywood-heroines">
          {TollyWoodHeroinesData.map((Heroine) => (
            <div key={Heroine.id}>
              <img src={Heroine.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TollyWoodHeroine;
