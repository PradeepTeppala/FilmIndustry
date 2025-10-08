import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import Footer from "./Footer";
import Header from "./Header";
import HomeMovies from "./HomeMovies";
import About from "./About";

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
            <Link className="industry-name" to="/tollywood">
              Tollywood
            </Link>
            <Link className="industry-name" to="/bollywood">
              Bollywood
            </Link>
            <Link className="industry-name" to="/kollywood">
              Kollywood
            </Link>
            <Link className="industry-name" to="/mollywood">
              Mollywood
            </Link>
            <Link className="industry-name" to="/sandalwood">
              Sandalwood
            </Link>
          </div>
        </div>
      </div>
      <About/>
      <HomeMovies />
      <Footer />
    </>
  );
}

export default Home;
