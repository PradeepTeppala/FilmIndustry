import React from "react";
import "./Home.css";

import { BsSearch } from "react-icons/bs";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>filmindustry.com</h1>
          <p>
            "FilmIndustry.com is your one-stop destination to explore heroes,
            heroines, directors, music directors, and the movies that bring them
            together. Discover the world of cinema with detailed profiles,
            stories, and movie insights all in one place."
          </p>
          <div className="search-box">
            <input type="text" placeholder="Search......" />
            <span>
              <BsSearch className="search-icon" />
            </span>
          </div>

          <div className="industry-menu">
            <p>TollyWood</p>
            <p>BollyWood</p>
            <p>KollyWood</p>
            <p>MollyWood</p>
            <p>SandleWood</p>
          </div>
        </div>

        <div className="movies-content">
          {/* <h1>Movies</h1> */}
          <div className="movies-list">
            <h2>➤ TollyWood Top Movies</h2>
            <div className="movie-posters">
              <img
                src="src/Components/Assets/TollyWood/Bahubali2.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/TollyWood/RRR.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/TollyWood/Pushpa2.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/TollyWood/OG.webp"
                alt="Bahubali2"
              />
            </div>

            <h2>➤ BollyWood Top Movies</h2>
            <div className="movie-posters">
              <img
                src="src/Components/Assets/BollyWood/Dangal.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/BollyWood/Animal.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/BollyWood/Chhaava.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/BollyWood/War.jpg"
                alt="Bahubali2"
              />
            </div>

            <h2>➤ KollyWood Top Movies</h2>
            <div className="movie-posters">
              <img
                src="src/Components/Assets/KollyWood/PS-2.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/KollyWood/Coolie.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/KollyWood/Leo.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/KollyWood/Retro.jpg"
                alt="Bahubali2"
              />
            </div>

            <h2>➤ MollyWood Top Movies</h2>
            <div className="movie-posters">
              <img
                src="src/Components/Assets/MollyWood/Empuraan-2.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/MollyWood/ManjumalBoys.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/MollyWood/GoatLife.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/MollyWood/Bramayugam.jpg"
                alt="Bahubali2"
              />
            </div>
            <h2>➤ SandleWood Top Movies</h2>
            <div className="movie-posters">
              <img
                src="src/Components/Assets/SandleWood/KGF-2.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/SandleWood/Kantara.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/SandleWood/James.jpg"
                alt="Bahubali2"
              />
              <img
                src="src/Components/Assets/SandleWood/Charlie777.jpeg"
                alt="Bahubali2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
