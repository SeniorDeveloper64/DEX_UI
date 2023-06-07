import React from "react";
import cn from "classnames";

const ContactOneInfoItem = (props) => {
  return (
    <div className="contact-info-item">
      <div className="icon">
        <span className="icon-background"></span>
        <i className={cn("fas", props.item.icon)}></i>
      </div>
      <div className="content">
        <p>{props.item.content}</p>
      </div>
    </div>
  );
};

export default ContactOneInfoItem;
