import React from "react";
import { Link } from "react-router-dom";

const BlogPagination = () => {
  return (
    <div className="pagination-wrap">
      <ul className="list-wrap">
        <li className="prv-next">
          <Link to="#">
            <i className="fas fa-angle-double-left"></i>
          </Link>
        </li>
        <li>
          <Link to="#">1</Link>
        </li>
        <li>
          <Link to="#" className="current">
            2
          </Link>
        </li>
        <li>
          <Link to="#">3</Link>
        </li>
        <li>
          <Link to="#">...</Link>
        </li>
        <li className="prv-right">
          <Link to="#">
            <i className="fas fa-angle-double-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
