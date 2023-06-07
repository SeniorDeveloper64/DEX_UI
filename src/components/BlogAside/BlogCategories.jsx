import React from "react";
import { Link } from "react-router-dom";

const BlogCategories = () => {
  const categories = [
    { title: "Chemistry", quantity: "03", url: "/blog" },
    { title: "Forensic science", quantity: "07", url: "/blog" },
    { title: "Gemological", quantity: "03", url: "/blog" },
    { title: "Chemistry", quantity: "09", url: "/blog" },
    { title: "UI/UX Deisgn", quantity: "00", url: "/blog" },
    { title: "Gemological", quantity: "26", url: "/blog" },
  ];

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Categories</h2>
      <div className="category-list">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.url}>
                {category.title} <span>{category.quantity}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories;
