import React from "react";

const BlogCommentForm = () => {
  return (
    <div className="post-comments-form">
      <div className="post-comment-content">
        <h4 className="title">Leave a Reply</h4>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="comment-form">
        <form action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" placeholder="Enter your number" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" placeholder="Enter your website" />
              </div>
            </div>
          </div>
          <div className="form-grp">
            <textarea name="comment" placeholder="Type your comment"></textarea>
          </div>
          <button type="submit" className="btn btn-two">
            Post comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCommentForm;
