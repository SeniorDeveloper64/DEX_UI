import React from "react";
import ContactTwoForm from "./ContactTwoForm";
import ContactTwoInfo from "./ContactTwoInfo";

const ContactTwo = () => {
  return (
    <section id="contact" className="contact-aera contact-bg">
      <div className="container custom-container-four">
        <div className="contact-inner">
          <div className="row">
            <div className="col-lg-6">
              <ContactTwoInfo />
            </div>

            <div className="col-lg-6">
              <ContactTwoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
