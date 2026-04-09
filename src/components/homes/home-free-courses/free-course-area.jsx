import React from "react";
import { FaStar, FaUsers, FaBookOpen, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Import course images
import course1 from "../../../../publicassets/images/free-course/courses/course1.jpg";
import course2 from "../../../../public/assets/images/free-course/courses/course2.jpg";
import course3 from "../../../../publicassets/images/free-course/courses/course3.jpg";
import course4 from "../../../../publicassets/images/free-course/courses/course4.jpg";
import course5 from "../../../../publicassets/images/free-course/courses/course5.jpg";
import course6 from "../../../../public/assets/images/free-course/courses/course6.jpg";

// import course7 from "../assets/images/free-course/course7.jpg";
// import course8 from "../assets/images/free-course/course8.jpg";

function Courses() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Full Stack Web Development",
      duration: "8 Weeks",
      level: "Beginner to Advanced",
      students: "450",
      rating: "4.8",
      image: course1,
    },
    {
      title: "Python Programming Masterclass",
      duration: "6 Weeks",
      level: "Beginner",
      students: "320",
      rating: "4.7",
      image: course2,
    },
    {
      title: "Cyber Security Fundamentals",
      duration: "5 Weeks",
      level: "Intermediate",
      students: "210",
      rating: "4.6",
      image: course3,
    },
    {
      title: "AWS Cloud Computing Basics",
      duration: "7 Weeks",
      level: "Intermediate",
      students: "540",
      rating: "4.8",
      image: course4,
    },

    {
      title: "Data Science & Machine Learning",
      duration: "10 Weeks",
      level: "Intermediate to Advanced",
      students: "870",
      rating: "4.9",
      image: course5,
    },
    {
      title: "React & Next.js Complete Guide",
      duration: "6 Weeks",
      level: "Intermediate",
      students: "430",
      rating: "4.8",
      image: course6,
    },
    // {
    //   title: "DevOps with Docker & Kubernetes",
    //   duration: "8 Weeks",
    //   level: "Advanced",
    //   students: "5,460",
    //   rating: "4.7",
    //   image: course7,
    // },
    // {
    //   title: "UI/UX Design for Developers",
    //   duration: "4 Weeks",
    //   level: "Beginner",
    //   students: "4,980",
    //   rating: "4.6",
    //   image: course8,
    // },
    // {
    //   title: "Blockchain & Web3 Development",
    //   duration: "7 Weeks",
    //   level: "Intermediate",
    //   students: "3,750",
    //   rating: "4.7",
    //   image: course9,
    // },
    // {
    //   title: "Mobile App Development with Flutter",
    //   duration: "6 Weeks",
    //   level: "Beginner to Intermediate",
    //   students: "6,890",
    //   rating: "4.8",
    //   image: course10,
    // },
    // {
    //   title: "AI Prompt Engineering & Generative AI",
    //   duration: "5 Weeks",
    //   level: "Beginner",
    //   students: "8,210",
    //   rating: "4.9",
    //   image: course11,
    // },
    // {
    //   title: "Ethical Hacking & Penetration Testing",
    //   duration: "9 Weeks",
    //   level: "Advanced",
    //   students: "5,930",
    //   rating: "4.8",
    //   image: course12,
    // },
  ];
  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Featured Free Courses</h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              {/* Course Image */}
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-badge">Free Certificate</div>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>

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
                    <FaStar className="icon-star" /> {course.rating}
                  </span>
                  <span>
                    <FaUsers /> {course.students} Students
                  </span>
                </div>
                <div className="browse-more-wrapper">
                  <button
                    className="browse-more-btn"
                    onClick={() => navigate("/courses")}
                  >
                    Browse More Courses
                  </button>
                </div>
                {/* 
                <button
                  className="enroll-btn"
                  onClick={() => navigate(`/course/${course.slug}`)}
                >
                  Enroll Now
                </button> */}
              </div>
            </div>
          ))}
        </div>
        {/* Browse More Button */}
        {/* <div className="browse-more-wrapper">
          <button
            className="browse-more-btn"
            onClick={() => navigate("/courses")}
          >
            Browse More Courses
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Courses;
