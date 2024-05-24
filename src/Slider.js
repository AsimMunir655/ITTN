import React from "react";
import { Carousel } from "3d-react-carousal";

let slides = [
  <img src="/images/Group 89.svg" alt="1" />,
  <img src="/images/Group 89.svg" alt="2" />,
  <img src="/images/Group 89.svg" alt="3" />,
];

function Slider() {
  return (
    <div>
      <Carousel slides={slides} autoplay={true} interval={1000} />;
    </div>
  );
}

export default Slider;
