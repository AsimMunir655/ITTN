import React, { useEffect } from "react";
import Media from "../components/Media";
import Orignals from "../components/Orignals";
import { Keepingup } from "../components/Keepingup";
import Webfeed from "../components/Webfeed";
import Learnmore from "../components/Learnmore";
import LatestVideos from "../components/LatestVideos";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Video from "./Video";
import Navbar from "../components/Navbar";
import Darkimgs from "../components/Darkimgs";

function LandingPages() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const moveToDiv = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <>
      <Navbar moveToDiv={moveToDiv} />
      <div className="home" id="home">
        <Video moveToDiv={moveToDiv} />
        <div id="projects">
          <Orignals />
        </div>
        <div className="background__img">
          <Keepingup />
          <div id="webfeed">
            <Webfeed moveToDiv={moveToDiv} />
          </div>
        </div>
        <div id="learn">
          <Learnmore moveToDiv={moveToDiv} />
        </div>
        <div id="about" className="fff">
          <Media moveToDiv={moveToDiv} />
          <LatestVideos />
        </div>
        <div className="home" id="contact">
          <ContactUs moveToDiv={moveToDiv} />
        </div>
        <Darkimgs />
        <Footer />
      </div>
    </>
  );
}

export default LandingPages;
