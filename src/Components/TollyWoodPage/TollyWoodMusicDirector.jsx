import React from "react";
import "./TollyWoodMusicDirector.css";
import { TollyWoodMusicDirectorsData } from "../../Data/TollyWood/MusicDirector";

function TollyWoodMusicDirector() {
  return (
    <>
      <div className="musicdirectors-title">
        <h2>TollyWood Music Director's</h2>
      </div>
      <div className="tollywoodhero-container">
        <div className="tollywood-musicdirectors">
          {TollyWoodMusicDirectorsData.map((MusicDir) => (
            <div key={MusicDir.id}>
              <img src={MusicDir.image} alt="" />
              <div className="musicdirectors-details">
                <h3>{MusicDir.name}</h3>
                <a
                  href={MusicDir.Link}
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

export default TollyWoodMusicDirector;
