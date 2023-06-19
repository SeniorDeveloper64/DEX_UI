import React from "react";
import img01 from "../../assets/img/images/about_img01.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Never lose your digital assets!</span>
                {/* <h2 className="title">
                  First DEX to offer profit sharing rewards
                </h2> */}
              </div>
              <p>
              HEXIDO plans to introduce a decentralized Know Your Customer (KYC) system, 
              where your identity verification is stored in a decentralized setting, 
              ensuring that your personal information remains confidential and undisclosed to any parties. 
              At any given time, you have the ability to restore your wallet and regain access to your assets
              by providing a valid proof of identity.
              </p>
              <Link to="/" className="btn">
                Get Whitelisted
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
