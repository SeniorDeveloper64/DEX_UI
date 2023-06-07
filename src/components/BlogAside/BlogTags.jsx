import React from "react";
import { Link } from "react-router-dom";

const BlogTags = () => {
  const tags = [
    { title: "landing", url: "/blog" },
    { title: "charity", url: "/blog" },
    { title: "apps", url: "/blog" },
    { title: "education", url: "/blog" },
    { title: "data", url: "/blog" },
    { title: "book", url: "/blog" },
    { title: "design", url: "/blog" },
    { title: "website", url: "/blog" },
    { title: "landng page", url: "/blog" },
  ];

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Popular Tag</h2>
      <div className="tag-list">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <Link to={tag.url}>{tag.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogTags;
