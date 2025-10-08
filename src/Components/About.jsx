import React from "react";
import "./About.css";
import { FaFilm, FaUserTie, FaMusic, FaStar, FaGlobeAsia } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">
        About <span>FilmIndustry.com</span>
      </h1>

      <p className="about-description">
        Welcome to <strong>FilmIndustry.com</strong> — your ultimate destination
        to explore the heartbeat of the Indian film industry.  
        We bring you the world of movies, web series, and musical masterpieces
        that shape Indian entertainment.  
        From legendary heroes and heroines to visionary directors and talented
        music composers — dive into the stories behind the magic.
      </p>

      <div className="about-icons-section">
        <div className="about-card">
          <FaFilm className="about-icon" />
          <h3>Movies & Web Series</h3>
          <p>
            Explore the latest and trending Indian movies and web series from
            Bollywood, Tollywood, Kollywood, and more.
          </p>
        </div>

        <div className="about-card">
          <FaUserTie className="about-icon" />
          <h3>Directors</h3>
          <p>
            Discover profiles of the most creative and visionary filmmakers who
            redefine Indian cinema.
          </p>
        </div>

        <div className="about-card">
          <FaMusic className="about-icon" />
          <h3>Music Directors</h3>
          <p>
            Step into the world of melodies, beats, and musical geniuses who
            create unforgettable soundtracks.
          </p>
        </div>

        <div className="about-card">
          <FaStar className="about-icon" />
          <h3>Heroes & Heroines</h3>
          <p>
            Celebrate your favorite stars — their inspiring journeys, movies,
            and iconic performances.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
