import React from "react";
import { TollyWoodDirectorsData } from "../../Data/TollyWood/Directors";
import "./TollyWoodDirector.css";

function TollyWoodDirector() {
  return (
    <>
      <div className="tollywoodhero-container">
        <div className="tollywood-directors">
          {TollyWoodDirectorsData.map((Director) => (
            <div key={Director.id}>
              <img src={Director.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TollyWoodDirector;
