import React from "react";
import "./SandalWoodMusicDirector.css";
import { SandalWoodMusicDirectorsData } from "../../Data/SandleWood/MusicDirectors";

function SandalWoodMusicDirector() {
  return (
    <>
      <div className="musicdirectors-title">
        <h2>SandalWood Music Director's</h2>
      </div>
      <div className="sandalwoodhero-container">
        <div className="sandalwood-musicdirectors">
          {SandalWoodMusicDirectorsData.map((MusicDir) => (
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

export default SandalWoodMusicDirector;
