import React from "react";
import "../assets/styles/Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { animate, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
            >
              Discover <br /> Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <p className="secondaryText">
              Find a variety of properties that suit you very easilty
            </p>
            <p className="secondaryText">
              Forget all difficulties in finding a residence for you
            </p>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search by title/city/country" />
            <button className="btn">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>{" "}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>{" "}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={28} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
          >
            <img src="./hero-image.png" alt="Hero Image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
