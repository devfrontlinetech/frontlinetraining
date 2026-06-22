import React from "react";
import Image from "next/image";
import blogs from "../../data/blog-2-data";
import BlogSidebar from "./blog-sidebar";

const BlogCard = ({ blog }) => {
  return (
    <div className="blogsec-card">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="blogsec-image"
      />

      <h3 className="blogsec-title">{blog.title}</h3>
      <p className="blogsec-desc">{blog.desc}</p>

      <div className="blogsec-meta">
        <span>📅 {blog.date}</span>
        <span>📍 {blog.location}</span>
      </div>

      <span className="blogsec-category">{blog.category}</span>
    </div>
  );
};

const BlogCourse = () => {
  return (
    <div className="blogsec-container">
      <h1 className="blogsec-main-title">Free Courses Blog</h1>

      <div className="blogsec-layout">
        <div className="blogsec-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="blogsec-sidebar">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogCourse;