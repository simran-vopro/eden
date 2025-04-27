import React from "react";
import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";

const blogPosts = [
  {
    id: 1,
    title: "First Blog Title",
    content:
      "This is a short description of the first blog post. It's engaging and informative.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Second Blog Title",
    content:
      "Here is the second blog post with a little more detail and depth for the reader.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Third Blog Title",
    content:
      "Third blog content to keep the insights page fresh and interesting!",
    image: "https://via.placeholder.com/300",
  },
];

const Insights = () => {
  return (
    <>
      <div id="insights-header">
        <Header
          headerStyle={{ backgroundColor: "rgb(227 227 227 / 40%)" }}
          navItemStyle={{ color: "#000" }}
        />
      </div>

      <div className="p-5"></div>

      <div className="container py-4">
        <div className="row">
          {/* Left Side - Blogs */}
          <div className="col-lg-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="card mb-4 shadow-sm rounded">
                <img
                  src={post.image}
                  className="card-img-top rounded-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <div className="d-flex justify-content-start gap-3 mt-3">
                    <span>🔗 Share</span>
                    <span>📘 Facebook</span>
                    <span>🐦 Twitter</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Blog List */}
          <div className="col-lg-4">
            <h4 className="mb-3">Latest Blogs</h4>
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="d-flex align-items-center mb-3 p-2 shadow-sm rounded"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="flex-grow-1">
                  <h6 className="mb-0">{post.title}</h6>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brands style={{ padding: "10rem 0 0" }} />
      <Footer />
    </>
  );
};

export default Insights;
