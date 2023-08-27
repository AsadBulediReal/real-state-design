import React from "react";
import "../assets/styles/Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Logo" />
          <p>
            Our vision is to make all people <br /> the best place to live for
            them.
          </p>
        </div>
        <div className="flexColStart f-right">
          <h2 className="primaryText">Information</h2>
          <p className="secondaryText">145 New York, FL 5467, USA</p>
          <div className="flexCenter f-menu">
            <a href="#Residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#get-started">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
