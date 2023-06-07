import React from "react";
import { Link } from "react-router-dom";

const BlogPages = () => {
  const pages = [
    { title: "Web Design", url: "/blog" },
    { title: "Branding Design", url: "/blog" },
    { title: "Photography", url: "/blog" },
    { title: "Business Statergy", url: "/blog" },
    { title: "UI/UX Deisg", url: "/blog" },
    { title: "Web Development", url: "/blog" },
  ];

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Pages</h2>
      <div className="page-list">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.url}>
                {page.title}
                <i className="fas fa-chevron-right" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPages;
