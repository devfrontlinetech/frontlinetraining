import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaBookOpen, FaStar } from "react-icons/fa";
// import HeroImg from "../../../assets/images/free-course/hero.jpg";
import HeroImg from "../../../../public/assets/images/free-course/hero.jpg";

const HeroCourse = () => {
  const navigate = useNavigate();
  
  const highlights = [
    "100% Free Certification",
    "Beginner to Advanced Level",
    "Industry-Recognized Content",
  ];

  return (
    <section className="hero">
      <div className="container hero-content">
        
       
        <div className="hero-left">
          <h1>
            Free Online <span>IT Courses</span> with Certificate
          </h1>

          <p className="hero-subtitle">
            Upgrade your skills with high-quality, industry-ready IT training
            programs — completely free and accessible anytime.
          </p>

        
          <div className="hero-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>

         
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/courses")}>Browse Courses</button>
            <button className="secondary-btn" onClick={() => navigate("/contact")}>Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <FaUsers />
              <div>
                <h4>25,000+</h4>
                <p>Students Enrolled</p>
              </div>
            </div>

            <div className="stat">
              <FaBookOpen />
              <div>
                <h4>120+</h4>
                <p>IT Courses</p>
              </div>
            </div>

            <div className="stat">
              <FaStar />
              <div>
                <h4>4.8/5</h4>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="hero-right">
          <div className="hero-image-placeholder">
           <img src={HeroImg} alt="Hero" className="hero-image"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroCourse;