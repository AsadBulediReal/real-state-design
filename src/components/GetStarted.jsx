import React from "react";

import "../assets/styles/GetStarted.css";

const GetStarted = () => {
  return (
    <section id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <h2 className="primaryText">Get started with Homyz</h2>
          <p className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />{" "}
            Find your residence soon
          </p>
          <button className="btn">
            {" "}
            <a href="mailto:buledijamil37@gmail.com">Get Started</a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
