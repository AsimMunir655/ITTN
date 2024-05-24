import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="orignal-content w-50 footer-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue porttitor
        mattis maecenas hendrerit. Amet mattis dignissim augue cras neque in
        adipiscing faucibus. Dui vitae, malesuada metus velit tincidunt.
      </p>
      <div className="footer_flex">
        <div className="">
          <img className="mt-4 foo_img" src="/images/footerlogo.png" alt="" />
        </div>
        <div className="d-flex mt-5 footerr">
          <div className="footer_text mr-5">Learn More</div>
          <div className="footer_text mr-5">Privacy Policy</div>
          <div className="footer_text mr-5">Terms & Conditions</div>
          <div className="footer_text mr-5">Contact</div>
          <div className="footer_text mr-5">EN</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
