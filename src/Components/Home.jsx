import React from "react";
import "./Home.css";

import { BsSearch } from "react-icons/bs";
import Footer from "./Footer";
import Header from "./Header";
import HomeMovies from "./HomeMovies";

function Home() {
  return (
    <>
      <Header />
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
      </div>
      <HomeMovies />

      <Footer />
    </>
  );
}

export default Home;
