import React from "react";
import img01 from "../../assets/img/blog/rc_post_img01.jpg";
import img02 from "../../assets/img/blog/rc_post_img02.jpg";
import img03 from "../../assets/img/blog/rc_post_img03.jpg";
import img04 from "../../assets/img/blog/rc_post_img04.jpg";
import BlogRecentItem from "./BlogRecentItem";

const BlogRecents = () => {
  const recentItems = [
    {
      title: "Don’t Underestimate The Software",
      url: "/blog-details",
      time: "4 March. 2022",
      src: img01,
    },
    {
      title: "Designing Human-Machine Interfaces..",
      url: "/blog-details",
      time: "4 March. 2022",
      src: img02,
    },
    {
      title: "Web Design Done Well: Excellent",
      url: "/blog-details",
      time: "4 March. 2022",
      src: img03,
    },
    {
      title: "Don’t Underestimate The Software",
      url: "/blog-details",
      time: "4 March. 2022",
      src: img04,
    },
  ];

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Recent Post</h2>
      <div className="rc-post-wrap">
        {recentItems.map((item, index) => (
          <BlogRecentItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogRecents;
