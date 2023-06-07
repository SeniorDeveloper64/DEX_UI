import React from "react";
import BlogListItem from "./BlogListItem";
import img01 from "../../assets/img/blog/blog_img01.jpg";
import img02 from "../../assets/img/blog/blog_img02.jpg";
import img03 from "../../assets/img/blog/blog_img03.jpg";

const BlogList = () => {
  const blog_list = [
    {
      url: "/blog-details",
      src: img01,
      author: "Alextina",
      time: "Dec 28, 2022",
      comments: "03",
      title:
        "New trends in UI/UX Design World of crypto Integration of this year",
      summary:
        "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory",
    },
    {
      url: "/blog-details",
      src: img02,
      author: "Alextina",
      time: "Dec 28, 2022",
      comments: "03",
      title: (
        <>
          That Time We Burned Down Players’ <br />
          Houses in Ultima Online
        </>
      ),
      summary:
        "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory",
    },
    {
      url: "/blog-details",
      src: img03,
      author: "Alextina",
      time: "Dec 28, 2022",
      comments: "03",
      title: `Why Your Next ‘Yes’ Hire Might Come From Someone Who Just Said`,
      summary:
        "Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory",
    },
  ];

  return (
    <>
      {blog_list.map((blog, index) => (
        <BlogListItem key={index} item={blog} />
      ))}
    </>
  );
};

export default BlogList;
