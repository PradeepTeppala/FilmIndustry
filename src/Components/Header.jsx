import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="title">
            <h1>FilmIndustry.com</h1>
          </div>
          <div className="header-menu">
            <p>Home</p>
            <p>Industry</p>
            <p>Movies</p>
            <p>Webseries</p>
            <img src="/src/Components/Assets/user.png" alt="Account" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
