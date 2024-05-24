import React from "react";
import { Link } from "react-router-dom";

function Media() {
  const mediadta = [
    {
      image: "/images/Group 33.svg",
      text: "MUSIC",
      content: "Music is an art and art is a way of expression.",
    },
    {
      path: "/entertainment",
      image: "/images/Group 136.svg",
      text: "ENTERTAINMENT",
      content: "Expect to see home created content and short films, you",
    },
    {
      image: "/images/Group 139.svg",
      text: "SPORTS",
      content: "From 3pm to 9pm, every Thursday and Friday, we’ll be",
    },
    {
      image: "/images/Group 137.svg",
      text: "NFT",
      content:
        "NFT stands for ‘Non-fungible token’. It is a unique unit of data",
    },
    {
      path: "/fashtion",
      image: "/images/Group 135.svg",
      text: "FASHION",
      content: "Fashion plays a massive role in music, film and many more; ",
    },
    {
      image: "/images/Group 134.svg",
      text: "NEWS",
      content: "From 3pm to 9pm, every Thursday and Friday, we’ll be",
    },
    {
      image: "/images/Group 138.svg",
      text: "PHOTOGRAPHY",
      content:
        "Click here to view a variety of images from different projects,",
    },
    {
      image: "/images/Group 132.svg",
      text: "FILM",
      content: "Expect to see home created content and short films, you",
    },
  ];
  return (
    <div className="mediaa">
      <div className="media_content1 mt-5">Everything You Need is Here</div>
      <div className="media_content2 mb-4 ">
        Need a distraction? Over here there isn’t a jaded moment. We have an
        addictive selection of content, covering everything from music to
        sports; pick your poison, grab a seat and enjoy everything ITTN has in
        store for you!
      </div>
      <div className="media_map">
        {mediadta.map((el) => {
          if (el.path) {
            return (
              <div className="madia_card mb-5">
                <Link to={el.path}>
                  <img class="card_img" src={el.image} alt="" />
                  <div class="text text_purple p-3">{el.text}</div>
                  <div class="card_content">{el.content}</div>
                </Link>
              </div>
            );
          } else {
            return (
              <div className="madia_card mb-5">
                <img class="" src={el.image} alt="" />
                <div class="text text_purple p-3">{el.text}</div>
                <div class="card_content">{el.content}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Media;
