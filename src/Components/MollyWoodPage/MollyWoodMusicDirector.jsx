import React from "react";
import "./MollyWoodMusicDirector.css";
import { MollyWoodMusicDirectorsData } from "../../Data/MollyWood/MusicDirectors";

function MollyWoodMusicDirector() {
  return (
    <>
      <div className="musicdirectors-title">
        <h2>MollyWood Music Director's</h2>
      </div>
      <div className="mollywoodhero-container">
        <div className="mollywood-musicdirectors">
          {MollyWoodMusicDirectorsData.map((MusicDir) => (
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

export default MollyWoodMusicDirector;
