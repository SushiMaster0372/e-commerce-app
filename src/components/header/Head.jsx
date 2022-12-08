import React from "react";
import "./header.scss";

const Head = () => {
  return (
    <div id="head">
      <div className="container flex justify-between">
        <div className="flex">
          <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <span>+77479517641</span>
          </div>

          <div className="email">
            <i className="fa-solid fa-envelope"></i>
            <span>example@gmail.com</span>
          </div>

          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <span>Almaty, Kazakhstan</span>
          </div>
        </div>

        <div className="social-media">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Head;
