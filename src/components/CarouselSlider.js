import React from "react";
import { Carousel } from "3d-react-carousal";
export default function CarouselSlider() {
  let slides = [
    <img className="himg" src="/images/2.jpg" alt="1" />,
    <img className="himg" src="/images/3.jpg" alt="2" />,
    <img className="himg" src="/images/4.jpg" alt="3" />,
    <img className="himg" src="/images/11.jpg" alt="4" />,
    <img className="himg" src="/images/12.jpg" alt="5" />,
    <img className="himg" src="/images/13.jpg" alt="6" />,
    <img className="himg" src="/images/14.jpg" alt="7" />,
    <img className="himg" src="/images/15.jpg" alt="8" />,
    <img className="himg" src="/images/16.jpg" alt="9" />,
    <img className="himg" src="/images/17.jpg" alt="10" />,
    <img className="himg" src="/images/18.jpg" alt="12" />,
    <img className="himg" src="/images/20.jpg" alt="13" />,
    <img className="himg" src="/images/99.jpg" alt="14" />,
  ];
  return (
    <div className="my-5 mb-4">
      <Carousel slides={slides} />
    </div>
  );
}
