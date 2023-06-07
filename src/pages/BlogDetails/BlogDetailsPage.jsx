import React from "react";
import BlogCommentForm from "../../components/BlogDetails/BlogCommentForm";
import BlogComments from "../../components/BlogDetails/BlogComments";
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import LayoutBlog from "../../layouts/LayoutBlog";

const BlogDetailsPage = () => {
  return (
    <LayoutBlog pageTitle={"Blog Details"} item={"BLOG DETAILS"}>
      <BlogDetails />
      <BlogComments />
      <BlogCommentForm />
    </LayoutBlog>
  );
};

export default BlogDetailsPage;
