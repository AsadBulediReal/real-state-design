import React from "react";
import "../assets/styles/Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="#Residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="btn">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
