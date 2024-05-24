import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Webfeed from "./Webfeed";
const Entertainment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="fastion_div">
        <img src="/images/micro.svg" alt="" />
        <h3 className="fashtion_title">
          WORLD OF<br></br>ENTERTAINMENT
        </h3>
        <p className="fashtion_content">
          Connecting artists, community and commerce through ITTN global
          creative networks, we champion talent and influence visual literacy to
          help foster a more just, ethical and inclusive world.
        </p>
      </div>
      <div className="section2">
        <div className="sec">
          <img src="/images/musicc.svg" alt=""></img>
        </div>
        <div className="section2_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          orci nisl<br></br> blandit ut ac sem adipiscing. Ultricies
          sollicitudin vestibulum elementum<br></br> aenean velit faucibus. Non,
          id aliquam, nec donec. Egestas bibendum velit<br></br> fermentum est,
          in sed eget. Ut nulla nullam vitae facilisi sed velit posuere.
          <br></br> Aliquam nisi.<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          orci nisl<br></br> blandit ut ac sem adipiscing. Ultricies
          sollicitudin vestibulum elementum<br></br> aenean velit faucibus. Non,
          id aliquam, nec donec. Egestas bibendum velit<br></br> fermentum est,
          in sed eget. Ut nulla nullam vitae facilisi sed velit posuere.
          <br></br> Aliquam nisi.<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          orci nisl<br></br> blandit ut ac sem adipiscing. Ultricies
          sollicitudin vestibulum elementum<br></br> aenean velit faucibus. Non,
          id aliquam, nec donec. Egestas bibendum velit<br></br> fermentum est,
          in sed eget. Ut nulla nullam vitae facilisi sed velit posuere.
          <br></br> Aliquam nisi.<br></br>
        </div>
      </div>
      <Webfeed />
      <Footer />
    </div>
  );
};

export default Entertainment;
