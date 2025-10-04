import React from "react";
import "./SandalWoodMusicDirector.css";
import { SandalWoodMusicDirectorsData } from "../../Data/SandleWood/MusicDirectors";

function SandalWoodMusicDirector() {
  return (
    <>
      <div className="sandalwoodhero-container">
        <div className="sandalwood-musicdirectors">
          {SandalWoodMusicDirectorsData.map((MusicDir) => (
            <div key={MusicDir.id}>
              <img src={MusicDir.image} alt="" />
              <div className="MusicDir-details">
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

export default SandalWoodMusicDirector;
