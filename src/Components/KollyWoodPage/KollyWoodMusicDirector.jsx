import React from "react";
import "./KollyWoodMusicDirector.css";
import { KollyWoodMusicDirectorsData } from "../../Data/KollyWood/MusicDirectors";

function KollyWoodMusicDirector() {
  return (
    <>
      <div className="musicdirectors-title">
        <h2>KollyWood Music Director's</h2>
      </div>
      <div className="kollywoodhero-container">
        <div className="kollywood-musicdirectors">
          {KollyWoodMusicDirectorsData.map((MusicDir) => (
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

export default KollyWoodMusicDirector;
