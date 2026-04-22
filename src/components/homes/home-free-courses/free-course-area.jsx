"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaUsers, FaBookOpen, FaClock } from "react-icons/fa";
import Image from "next/image";

function Courses() {
  const router = useRouter();

  const courses = [
    {
      title: "Full Stack Web Development",
      duration: "8 Weeks",
      level: "Beginner to Advanced",
      students: "450",
      rating: "4.8",
      image: "/assets/images/free-course/courses/course1.jpg",
    },
    {
      title: "Python Programming Masterclass",
      duration: "6 Weeks",
      level: "Beginner",
      students: "320",
      rating: "4.7",
      image: "/assets/images/free-course/courses/course2.jpg",
    },
    {
      title: "Cyber Security Fundamentals",
      duration: "5 Weeks",
      level: "Intermediate",
      students: "210",
      rating: "4.6",
      image: "/assets/images/free-course/courses/course3.jpg",
    },
    {
      title: "AWS Cloud Computing Basics",
      duration: "7 Weeks",
      level: "Intermediate",
      students: "540",
      rating: "4.8",
      image: "/assets/images/free-course/courses/course4.jpg",
    },
    {
      title: "Data Science & Machine Learning",
      duration: "10 Weeks",
      level: "Intermediate to Advanced",
      students: "870",
      rating: "4.9",
      image: "/assets/images/free-course/courses/course5.jpg",
    },
    {
      title: "React & Next.js Complete Guide",
      duration: "6 Weeks",
      level: "Intermediate",
      students: "430",
      rating: "4.8",
      image: "/assets/images/free-course/courses/course6.jpg",
    },
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Featured Free Courses</h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              {/* Image */}
              <div className="course-image">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                />
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
                    onClick={() => router.push("/courses")}
                  >
                    Browse More Courses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
