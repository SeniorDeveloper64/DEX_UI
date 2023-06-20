import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Multi-chain Support",
      description: "HEXIDO will use governance model to expand other blockchain network",
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Launchpad",
      description: "New projects will come alive on HEXIDO Launchpad and will be traded on the exchange",
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Never lose your assets",
      description: "Decentralized KYC stores your identity on a secure decentralized environment and you can restore your secret phrase",
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Mobile First",
      description: "HEXIDO provides seamlessly mobile trading experience in DeFi",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-50">
              {/* <span className="sub-title">What makes us HYBRID </span> */}
              <h2 className="title"  style={{color: 'rgb(39, 220, 139)'}}>
              What makes us HYBRID?
              </h2>
            </div>
            <p style={{color: 'rgb(255, 255, 255)'}}>
                HEXIDO is set to incorporate FIAT support, enabling users to directly purchase cryptocurrencies 
                using traditional fiat currencies through their HEXIDO Wallet. 
                This implementation will eliminate the necessity of relying on centralized exchanges for cryptocurrency purchases, 
                granting users the ability to trade assets on a decentralized exchange.
            </p>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
