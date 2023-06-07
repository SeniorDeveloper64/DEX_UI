import React from "react";
import BlogCategories from "./BlogCategories";
import BlogPages from "./BlogPages";
import BlogRecents from "./BlogRecents";
import BlogSearch from "./BlogSearch";
import BlogTags from "./BlogTags";

const BlogAside = () => {
  return (
    <aside className="blog-sidebar">
      {/* blog searching */}
      <BlogSearch />

      {/* blog categories */}
      <BlogCategories />

      {/* blog pages */}
      <BlogPages />

      {/* blog recents */}
      <BlogRecents />

      {/* blog popular tags */}
      <BlogTags />
    </aside>
  );
};

export default BlogAside;
