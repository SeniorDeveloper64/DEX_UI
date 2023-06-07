import React from "react";

const ContactOneForm = () => {
  return (
    <div className="contact-form-wrap">
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" placeholder="Enter your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" placeholder="Enter you email" required />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea name="massage" placeholder="Enter your massage"></textarea>
        </div>
        <div className="submit-btn text-center">
          <button type="submit" className="btn">
            Send Massage
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactOneForm;
