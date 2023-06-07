import React from "react";

const BlogSearch = () => {
  return (
    <div className="blog-widget">
      <h2 className="bw-title">Search Here</h2>
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Search post" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
