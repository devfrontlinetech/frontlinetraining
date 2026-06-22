import React from "react";

const BlogSidebar = () => {
  return (
    <aside className="blogsec-sidebar-wrapper">
      {/* SEARCH */}
      <div className="blogsec-sidebar-card">
        <h3 className="blogsec-sidebar-title">Search</h3>
        <input
          type="text"
          placeholder="Search courses..."
          className="blogsec-sidebar-search"
        />
      </div>

      {/* CATEGORIES */}
      <div className="blogsec-sidebar-card">
        <h3 className="blogsec-sidebar-title">Categories</h3>
        <ul className="blogsec-sidebar-list">
          <li>
            React <span>(12)</span>
          </li>
          <li>
            JavaScript <span>(18)</span>
          </li>
          <li>
            CSS <span>(10)</span>
          </li>
          <li>
            Backend <span>(9)</span>
          </li>
          <li>
            Full Stack <span>(7)</span>
          </li>
        </ul>
      </div>

      {/* RECENT POSTS */}
      <div className="blogsec-sidebar-card">
        <h3 className="blogsec-sidebar-title">Recent Posts</h3>
        <ul className="blogsec-sidebar-list">
          <li>Learn React Basics</li>
          <li>Master JavaScript in 30 Days</li>
          <li>Node.js Crash Course</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

      {/* POPULAR COURSES */}
      <div className="blogsec-sidebar-card">
        <h3 className="blogsec-sidebar-title">Popular Courses</h3>
        <ul className="blogsec-sidebar-list">
          <li>React Basics</li>
          <li>JS Advanced</li>
          <li>Node API</li>
          <li>Full Stack Bootcamp</li>
        </ul>
      </div>

      {/* TAGS */}
      <div className="blogsec-sidebar-card">
        <h3 className="blogsec-sidebar-title">Tags</h3>
        <div className="blogsec-tags">
          <span>React</span>
          <span>JS</span>
          <span>API</span>
          <span>CSS</span>
          <span>MongoDB</span>
          <span>Frontend</span>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="blogsec-sidebar-card blogsec-newsletter">
        <h3 className="blogsec-sidebar-title">Newsletter</h3>
        <p>Subscribe to get latest courses updates</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="blogsec-sidebar-input"
        />
        <button className="blogsec-subscribe-btn">Subscribe</button>
      </div>
    </aside>
  );
};

export default BlogSidebar;
