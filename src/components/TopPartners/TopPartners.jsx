import React from "react";
import img01 from "../../assets/img/partner/partner_img01.png";
import img02 from "../../assets/img/partner/partner_img02.png";
import img03 from "../../assets/img/partner/partner_img03.png";
import img04 from "../../assets/img/partner/partner_img04.png";
import img05 from "../../assets/img/partner/partner_img05.png";
import img06 from "../../assets/img/partner/partner_img06.png";
import img07 from "../../assets/img/partner/partner_img07.png";
import img08 from "../../assets/img/partner/partner_img08.png";
import img09 from "../../assets/img/partner/partner_img09.png";
import img10 from "../../assets/img/partner/partner_img10.png";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" },
    { src: img02, title: "" },
    { src: img03, title: "" },
    { src: img04, title: "" },
    { src: img05, title: "" },
    { src: img06, title: "" },
    { src: img07, title: "" },
    { src: img08, title: "" },
    { src: img09, title: "" },
    { src: img10, title: "" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              {/* <span className="sub-title">Our top partner</span> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              {/* <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
