import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import freeCourseData from "../../data/free-course-data.js";
import InstructorCard from "../../components/free-course-layout/instructor-details.jsx";
import CertificateCard from "../../components/free-course-layout/certificate.jsx";

import {
  FaStar,
  FaUsers,
  FaClock,
  FaBookOpen,
  FaCheckCircle,
  FaLayerGroup,
  FaChartLine,
  FaTools,
  FaPlayCircle,
  FaGlobe,
  FaCalendarAlt,
  FaGraduationCap,
  FaBoxOpen,
  //   FaUserTie,
} from "react-icons/fa";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const CoursePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const course = freeCourseData.find((item) => String(item.id) === String(id));

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div className="course-page-container">
      <button className="back-btn" onClick={() => router.back()}>
        ← Back
      </button>

      {/* HERO */}
      <motion.div className="course-hero">
        <div className="hero-left">
          <h1 className="course-hero-title">{course.title}</h1>
          <p className="short-desc">{course.shortDesc}</p>
          <p className="main-desc">{course.description}</p>

          <div className="course-stats">
            <span>
              <FaStar /> {course.rating}
            </span>
            <span>
              <FaUsers /> {course.students}
            </span>
            <span>
              <FaClock /> {course.duration}
            </span>
            <span>
              <FaBookOpen /> {course.level}
            </span>
          </div>

          <div className="course-meta">
            <span>
              <FaGlobe /> {course.language}
            </span>
            <span>
              <FaCalendarAlt /> {course.lastUpdated}
            </span>
            <span>
              <FaGraduationCap /> {course.lectures} lectures
            </span>
            <span>
              <FaStar /> {course.reviews} reviews
            </span>
          </div>
        </div>
      </motion.div>

      <div className="course-layout">
        <div className="course-left">
          <div className="course-highlights">
            <div className="highlight-box">
              <FaLayerGroup />
              <span>{course.curriculum.length} Modules</span>
            </div>
            <div className="highlight-box">
              <FaStar />
              <span>{course.rating}</span>
            </div>
            <div className="highlight-box">
              <MdOutlineWorkspacePremium />
              <span>{course.level}</span>
            </div>
            <div className="highlight-box">
              <FaClock />
              <span>{course.duration}</span>
            </div>
            <div className="highlight-box">
              <GiProgression />
              <span>Self-paced</span>
            </div>
          </div>

          <div className="course-section">
            <h2>Course Description</h2>
            <p>{course.detailedDesc}</p>
          </div>

          {/* LEARN */}
          <div className="course-section">
            <h2>What you'll learn</h2>
            <div className="learn-grid">
              {course.learn.map((item, i) => (
                <div key={i} className="learn-item">
                  <FaCheckCircle /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="course-section">
            <h2>Skills you'll gain</h2>
            <div className="badge-container">
              {course.skills.map((skill, i) => (
                <span key={i} className="badge">
                  <FaChartLine /> {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="course-section">
            <h2>Tools you'll learn</h2>
            <div className="badge-container">
              {course.tools.map((tool, i) => (
                <span key={i} className="badge tool">
                  <FaTools /> {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CURRICULUM */}
          <div className="course-section">
            <h2>Course Content</h2>
            {course.curriculum.map((sec, i) => (
              <div key={i} className="curriculum-card">
                <h4>{sec.title}</h4>
                <ul>
                  {sec.lessons.map((lesson, j) => (
                    <li key={j}>
                      <FaPlayCircle /> {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* REQUIREMENTS */}
          <div className="course-section">
            <h2>Requirements</h2>

            <div className="requirements-grid">
              {course.requirements.map((req, i) => (
                <div key={i} className="requirement-card">
                  <FaCheckCircle />
                  <p>{req}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INCLUDES */}
          <div className="course-section">
            <h2>This course includes</h2>

            <div className="includes-grid">
              {course.includes.map((item, i) => (
                <div key={i} className="include-item">
                  <div className="include-icon">
                    <FaBoxOpen />
                  </div>
                  <div className="include-text">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="course-right">
          <div className="hero-right sticky-card">
            <img src={course.image} alt={course.title} />

            <div className="card-content">
              <h3 className="course-side-title">{course.title}</h3>

              <div className="card-stats">
                <span>
                  <FaStar /> {course.rating}
                </span>
                <span>
                  <FaUsers /> {course.students}
                </span>
              </div>
              <div className="card-flex">
                <div className="card-meta">
                  <div>
                    <FaClock /> {course.duration}
                  </div>
                  <div>
                    <FaBookOpen /> {course.level}
                  </div>
                  <div>
                    <FaLayerGroup /> {course.curriculum.length} Modules
                  </div>
                </div>

                <div className="card-extra">
                  <span>
                    <FaCheckCircle /> Certificate
                  </span>
                  <span>
                    <FaCheckCircle /> Lifetime Access
                  </span>
                  <span>
                    <FaCheckCircle /> Mobile & Desktop
                  </span>
                </div>
              </div>

              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>

          <InstructorCard
            instructor={course.instructor}
            instructorDetails={course.instructorDetails}
          />
          <CertificateCard />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
