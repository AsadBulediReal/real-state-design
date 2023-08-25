import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../assets/styles/Residencies.css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <h1 className="orangeText">Best Choices</h1>
          <h1 className="primaryText">Popular Residencies</h1>
        </div>
        <Swiper {...sliderSettings}>
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt={card.name} />
                  <p className="secondaryText r-price">
                    {" "}
                    <span className="orangeText">$</span>
                    {card.price}
                  </p>
                  <h2 className="primaryText">{card.name}</h2>
                  <p className="secondaryText">{card.detail}</p>
                </div>
              </SwiperSlide>
            );
          })}
          <SliderButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
