import { Link } from "react-router-dom";
import React from "react";

const BlogListItem = (props) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to={props.item.url}>
          <img src={props.item.src} alt="" />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-meta">
          <ul>
            <li>
              <Link to={props.item.url}>
                <i className="far fa-user"></i>
                {props.item.author}
              </Link>
            </li>
            <li>
              <i className="far fa-clock"></i>
              {props.item.time}
            </li>
            <li>
              <Link to={props.item.url}>
                <i className="fas fa-comment-dots"></i>({props.item.comments})
                Coments
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to={props.item.url}>{props.item.title}</Link>
        </h2>
        <p>{props.item.summary}</p>
        <Link to={props.item.url} className="btn btn-two">
          Read more <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogListItem;
