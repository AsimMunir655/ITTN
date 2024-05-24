import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Orignals(props) {
  const data = [
    {
      image: "/images/vid.mp4",
      text: "Bad Food",
    },
    {
      image: "/images/viddd.mp4",
      text: "CUSTOMISED AVAILABLE CASH",
    },
    {
      image: "/images/vidd.mp4",
      text: "Bad Food",
    },
    {
      image: "/images/vid.mp4",
      text: "Bad Food",
    },
    {
      image: "/images/viddd.mp4",
      text: "CUSTOMISED AVAILABLE CASH",
    },
    {
      image: "/images/vidd.mp4",
      text: "Bad Food",
    },
  ];
  // responseive config
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="orignal">
        <h2 className="orignal-title text-center">ITTN Originals</h2>
        <p className="orignal-content w-50 text-center ml-auto mr-auto">
          ITTN originals features our most loved creations from comedy, reality,
          to documentaries, social games and experiments, with a heap more in
          store.
        </p>

        <Carousel
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          // responsive={responsive}
          // infinite={true}
          showDots={false}
          responsive={responsive}
          // infinite={false}
          autoPlay={false}
          autoPlaySpeed={99999500}
          // keyBoardControl={true}
          // customTransition="all .5"
          draggable={true}
          transitionDuration={700}
          containerClass="carouselContainer"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          //   customDot={<CustomDot />}
          // removeArrowOnDeviceType={["tablet", "mobile", "desktop,"]}
          // deviceType={props.deviceType}
          // renderDotsOutside={true}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {data.map((el) => {
            return (
              <div className="orignal_card">
                <video className="videoo" controls>
                  <source src={el.image} type="video/mp4" />
                </video>
                <div class="card_title2">{el.text}</div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
const CustomLeftArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="customArrowLeft pointer">
      <img className="dddd" src="/images/left-arrow.png" alt="Left"></img>
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="customArrowRight pointer">
      <img className="dddd" src="/images/right-arrow.png" alt="right"></img>
    </div>
  );
};
export default Orignals;
