import React from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaUsers, FaBookOpen, FaStar } from "react-icons/fa";
import Image from "next/image";

const HeroCourse = () => {
  const router = useRouter();

  const highlights = [
    "100% Free Certification",
    "Beginner to Advanced Level",
    "Industry-Recognized Content",
  ];

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <h1 className="hero__title">
            Free Online <span className="hero__highlight">IT Courses</span> with
            Certificate
          </h1>

          <p className="hero__subtitle">
            Upgrade your skills with high-quality, industry-ready IT training
            programs — completely free and accessible anytime.
          </p>

          <div className="hero__highlights">
            {highlights.map((item, index) => (
              <div key={index} className="hero__highlight-item">
                <FaCheckCircle className="hero__highlight-icon" />
                <span className="hero__highlight-text">{item}</span>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => router.push("/courses")}
            >
              Browse Courses
            </button>

            <button
              className="btn btn--secondary"
              onClick={() => router.push("/contact")}
            >
              Watch Demo
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <FaUsers className="hero__stat-icon" />
              <div>
                <h4 className="hero__stat-number">25,000+</h4>
                <p className="hero__stat-text">Students Enrolled</p>
              </div>
            </div>

            <div className="hero__stat">
              <FaBookOpen className="hero__stat-icon" />
              <div>
                <h4 className="hero__stat-number">120+</h4>
                <p className="hero__stat-text">IT Courses</p>
              </div>
            </div>

            <div className="hero__stat">
              <FaStar className="hero__stat-icon" />
              <div>
                <h4 className="hero__stat-number">4.8/5</h4>
                <p className="hero__stat-text">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-placeholder">
            <Image
              src="/assets/images/free-course/hero.jpg"
              alt="Hero"
              width={500}
              height={400}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCourse;
