import React from "react";
import { Link } from "react-router-dom";

const BlogCommentItem = (props) => {
  return (
    <div className="comments-box">
      <div className="comments-avatar">
        <img src={props.item.avatar} alt="" />
      </div>
      <div className="comment-text">
        <div className="avatar-name">
          <h5 className="title">
            {props.item.author}
            <Link to="#" className="comment-reply-link">
              <i className="fas fa-reply-all"></i>
            </Link>
          </h5>
          <span>{props.item.time}</span>
        </div>
        <p>{props.item.comment}</p>
      </div>
    </div>
  );
};

export default BlogCommentItem;
