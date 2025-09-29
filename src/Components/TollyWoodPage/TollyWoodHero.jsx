import React from "react";
import "./TollyWoodHero.css";
import { TollyWoodHerosData } from "../../Data/TollyWood/Heros";

function TollyWoodHero() {
  return (
    <>
      <div className="tollywoodhero-container">
        <div className="tollywood-heros">
          {TollyWoodHerosData.map((Hero) => (
            <div key={Hero.id}>
              <img src={Hero.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TollyWoodHero;
