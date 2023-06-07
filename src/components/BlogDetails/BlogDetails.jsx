import React from "react";
import blogImg from "../../assets/img/blog/blog_img01.jpg";
import blogDetails01 from "../../assets/img/blog/blog_details01.jpg";
import blogDetails02 from "../../assets/img/blog/blog_details02.jpg";
import blogDetails03 from "../../assets/img/blog/blog_details03.jpg";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="blog-post-item blog-details-wrap">
      <div className="blog-post-thumb">
        <img src={blogImg} alt="" />
      </div>
      <div className="blog-post-content">
        <div className="blog-meta">
          <ul>
            <li>
              <a href="/blog-details">
                <i className="far fa-user"></i>Alextina
              </a>
            </li>
            <li>
              <i className="far fa-clock"></i>Dec 28, 2022
            </li>
            <li>
              <a href="/blog-details">
                <i className="fas fa-comment-dots"></i>(04) Comments
              </a>
            </li>
          </ul>
        </div>
        <h2 className="title">
          New trends in UI/UX Design World of crypto Integration of this year
        </h2>
        <p>
          Laboratories used for scientific research take many forms because of
          the differing requirements of specialists in the various fields of
          science and engineering. A physics laboratory
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, aperiam ipsquae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, aperiam ipsquae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo
        </p>
        <div className="bd-approach-wrap">
          <div className="row align-items-center">
            <div className="col-46">
              <div className="bd-approach-content">
                <h4 className="title">Our Approach</h4>
                <p>
                  Must explain to you how all praising uts pain was born and I
                  will gives you a itself completed account of the system, and
                  sed expounds the ut actual teachings of that greater
                </p>

                <ul>
                  <li>
                    <i className="fas fa-check"></i>Extramural Funding
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Bacteria Markers
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Nam nec mi euismod euismod
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-54">
              <div className="bd-approach-img">
                <img src={blogDetails01} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bd-technology-content">
          <h2 className="title">What Is A Business Technology Roadmap?</h2>
          <p>
            Unlike detailed blueprints that lay out all tasks, deadlines, bug
            reports, and more along the way, technology roadmaps are high-level
            visual summaries highlighting a company’s vision or plans.
          </p>
          <p>
            In an Agile approach, a technology roadmap feeds the sprint and
            grooming processes, providing insight into how the product will
            travel from start to finish. It makes it easier for development
            teams to:
          </p>
        </div>

        <div className="blog-details-img">
          <div className="row">
            <div className="col-md-6">
              <img src={blogDetails02} alt="" />
            </div>
            <div className="col-md-6">
              <img src={blogDetails03} alt="" />
            </div>
          </div>
        </div>

        <div className="blog-details-bottom">
          <div className="blog-details-tags">
            <ul>
              <li className="tag-title">Tag</li>
              <li>
                <Link to={"/blog"}>Business</Link>
              </li>
              <li>
                <Link to={"/blog"}>Design</Link>
              </li>
              <li>
                <Link to={"/blog"}>apps</Link>
              </li>
              <li>
                <Link to={"/blog"}>data</Link>
              </li>
            </ul>
          </div>

          <div className="blog-details-social">
            <ul>
              <li className="social-title">Share</li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
