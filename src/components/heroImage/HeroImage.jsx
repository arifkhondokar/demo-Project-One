import React from "react";
import "./HeroImage.css";

const HeroImage = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `url(${props.bgImage}) no-repeat bottom center/cover`,
        height: "60vh"
      }}
    >
      <div className="banner-content">
          {/* <h1  key="1" className="heading-primary">{props.heading}</h1> */}
       
            {
              props.heading.map((item, index) => (
                <h1  key={index} className="heading-primary">{item}</h1>
                ))
            }
          <p className="text-white">{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
