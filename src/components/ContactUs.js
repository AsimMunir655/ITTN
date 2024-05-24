import React from "react";
import emailjs from "emailjs-com";
// import { Link } from "react-router-dom";
import $ from "jquery";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pe8o4ia",
        "template_3is4kfa",
        e.target,
        "Mjffqs_0Urw24Jxzx"
      )
      .then((res) => {
        console.log(res);
        alert("We will contact you as soon as possible");
        window.scroll({ top: 0 });
        $("form").trigger("reset");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="contact-us">
      <p className="contact-us-form right">Contact Us</p>
      <p className="orignal-content w-50 text-center ml-auto mr-auto">
        We will reply to you as soon as possible.
      </p>
      <form onSubmit={sendEmail}>
        <div className="col-lg-4 input-box">
          <input
            name="name"
            type="text"
            className="form-control input_css"
            placeholder="Name"
          />
        </div>
        <div className="col-lg-4 input-box mt-3">
          <input
            name="user_email"
            type="email"
            className="form-control input_css"
            id="inputEmail4"
            placeholder="Email address"
          />
        </div>
        <div className="col-lg-4 input-box mt-3">
          <input
            type="number"
            className="form-control input_css"
            id="inputCity"
            placeholder="Phone No."
          />
        </div>
        <div className="col-lg-4 input-box mt-3">
          <input
            type="text"
            className="form-control input_css"
            id="inputCity"
            placeholder="Subject"
          />
        </div>
        <div className="col-lg-4 input-box mt-3 mb-3">
          <textarea
            name="message"
            className="form-control input_css textarea_ln"
            placeholder="Description"
          ></textarea>
          <button className="homebtn2 sendbtn">SEND MESSAGE</button>
        </div>
      </form>

      <div className="social-media-icons">
        <a href="https://www.tiktok.com/en/">
          <img className="social-icon" src="/images/tiktok.svg" alt="" />
        </a>

        <a href="https://www.youtube.com/watch?v=hpBQo3xkQPE&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMhpBQo3xkQPE&start_radio=1&ab_channel=T-Series">
          <img className="ml-4 social-icon" src="/images/youtube.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/?hl=en">
          <img className="ml-4 social-icon" src="/images/insta.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
