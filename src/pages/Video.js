import React from "react";
import "../Video.css";
const Video = ({ moveToDiv }) => {
  return (
    <div>
      <header>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="/images/name.mp4" />
        </video>
        <div className="centered">
          <div className="">
            <div className="gggf mt-5">
              <div className="cccc">
                <div className="wrapper">
                  <div className="newtwork_heading">It’s Time To Network</div>
                </div>

                <div className="newtwork_heading2">Seeking entertainment?</div>
                <div className="network_content3">
                  You’ve found the home of creatives, a way to connect and
                  network, the perfect place to watch and be watched. ITTN
                  unleashes a world of opportunities, offering you the exposure
                  you deserve. We find value where others have overlooked
                  therefore providing you with rare and exclusive content you
                  won’t find anywhere else. Our website introduces an
                  imaginative concept to social networking and an effortless way
                  of getting paid. Our success and achievements come from
                  collaborations and collectively working as a team as “we
                  succeed by lifting others”.
                </div>
                <div className="network_content4">
                  -Welcome to ITTN, The world is yours for the taking.
                </div>
                <div className="home_btns mt-4">
                  <button
                    onClick={() => moveToDiv("learn")}
                    className="homebtn mr-5"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => moveToDiv("projects")}
                    className="homebtn2"
                  >
                    Projects
                  </button>
                </div>
              </div>
              <div className="eeee">
                <div className="">
                  <img className="admi_css" src="/images/neela.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Video;
