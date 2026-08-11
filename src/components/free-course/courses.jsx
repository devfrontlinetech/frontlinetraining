import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaStar, FaUsers, FaBookOpen, FaClock } from "react-icons/fa";
import courseData from "../../data/free-course-data";

const Courses = () => {
  const router = useRouter();

  const [visibleCount, setVisibleCount] = useState(6);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");

  const filteredCourses = courseData.filter((course) => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (levelFilter === "All" || course.level.includes(levelFilter))
    );
  });

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="free-courses-section">
      <div className="container">
        <h2 className="page-title">All Free IT Courses</h2>

        {/* FILTERS */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(6);
            }}
          />

          <select
            value={levelFilter}
            onChange={(e) => {
              setLevelFilter(e.target.value);
              setVisibleCount(6);
            }}
          >
            <option value="All">Select Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* GRID */}
        <div className="courses-grid">
          {filteredCourses.slice(0, visibleCount).map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="course-badge">Free</span>
              </div>

              <div className="course-content">
                <h3>{course.title}</h3>

                <div className="course-info">
                  <span>
                    <FaBookOpen /> {course.level}
                  </span>
                  <span>
                    <FaClock /> {course.duration}
                  </span>
                </div>

                <div className="course-meta">
                  <span>
                    <FaStar /> {course.rating}
                  </span>
                  <span>
                    <FaUsers /> {course.students}
                  </span>
                </div>

                {/* NAVIGATION */}
                <button
                  className="enroll-btn"
                  onClick={() =>
                    router.push(`/free-course-details/${course.id}`)
                  }
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredCourses.length && (
          <div className="load-more">
            <button onClick={loadMore}>Load More</button>
          </div>
        )}

        {/* NO RESULT */}
        {filteredCourses.length === 0 && (
          <p className="no-results">No courses found</p>
        )}
      </div>
    </section>
  );
};

export default Courses;
