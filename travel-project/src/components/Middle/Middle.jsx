import React from "react";
import "./Middle.scss";

const Middle = () => {
  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex">
            <h1  data-aos="fade-right">10</h1>
            <p>World of Experiences</p>
          </span>
          <span className="flex">
            <h1  data-aos="fade-right">2K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className="flex">
            <h1  data-aos="fade-right">10K+</h1>
            <p>Customer Reviews</p>
          </span>
          <span className="flex">
            <h1 data-aos="fade-right">4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>

    </div>
  );
};

export default Middle;
