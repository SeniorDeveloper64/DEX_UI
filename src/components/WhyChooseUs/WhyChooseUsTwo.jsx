import React from "react";
import icon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import icon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import icon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import icon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: icon01,
      title: "Mobile payment make easy",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: icon02,
      title: "Lifetime free transaction",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: icon03,
      title: "Protect the identity",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
    {
      src: icon04,
      title: "Sercurity & control over money",
      desc: "Add new, trending and rare artwork to your collection.",
      url: "/home-two",
    },
  ];

  return (
    <section className="choose-area-two choose-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">why Choose us</span>
              <h2 className="title">Why you choose our bigtech Token</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
