import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "../assets/styles/Header.css";

const Header = () => {
  const [menuOpen, setMenu] = useState(true);

  const getMenuStyle = (isOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !isOpen && "3rem" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu" style={getMenuStyle(menuOpen)}>
          <a href="#Residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="btn">
            <a href="#">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
