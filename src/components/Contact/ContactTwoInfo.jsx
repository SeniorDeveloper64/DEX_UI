import React from "react";
import icon from "../../assets/img/icon/contact_icon01.svg";

const ContactTwoInfo = () => {
  const info_items = [
    {
      src: icon,
      info: "Chevy Chase, Maryland 20815 Wisconsin Ave, Suite 700",
    },
    {
      src: icon,
      info: "support@figma.com",
    },
    {
      src: icon,
      info: "088 (778 886 664)",
    },
    {
      src: icon,
      info: "088 (778 886 664)",
    },
  ];

  return (
    <div className="contact-info-wrap-two wow fadeInLeft" data-wow-delay=".2s">
      <h2 className="title">Get in Touch</h2>

      {info_items.map((x, index) => (
        <div key={index} className="contact-list-item">
          <div className="icon">
            <img src={x.src} alt="" />
          </div>
          <div className="content">
            <p>{x.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactTwoInfo;
