import React from "react";
import "./BollyWoodMusicDirector.css";
import { BollyWoodMusicDirectorsData } from "../../Data/BollyWood/MusicDirectors";

function BollyWoodMusicDirector() {
  return (
    <>
      <div className="musicdirectors-title">
        <h2>BollyWood Music Director's</h2>
      </div>
      <div className="bollywoodhero-container">
        <div className="bollywood-musicdirectors">
          {BollyWoodMusicDirectorsData.map((MusicDir) => (
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

export default BollyWoodMusicDirector;
