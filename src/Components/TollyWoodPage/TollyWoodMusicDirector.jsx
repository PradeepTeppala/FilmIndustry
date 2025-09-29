import React from "react";
import "./TollyWoodMusicDirector.css";
import { TollyWoodMusicDirectorsData } from "../../Data/TollyWood/MusicDirector";

function TollyWoodMusicDirector() {
  return (
    <>
      <div className="tollywoodhero-container">
        <div className="tollywood-musicdirectors">
          {TollyWoodMusicDirectorsData.map((MusicDir) => (
            <div key={MusicDir.id}>
              <img src={MusicDir.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TollyWoodMusicDirector;
