import React from "react";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CTA() {
  const usenavigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          {/* <h2 className="cta-title">Start Your IT Career Today 🚀<FaRocket/></h2> */}
          <h2 className="cta-title">Start Your IT Career Today <FaRocket className="rocket"/></h2>

          <p className="cta-subtitle">
            Join thousands of learners upgrading their skills with free
            industry-recognized certification programs.
          </p>

          <div className="cta-buttons">
            <button className="cta-primary-btn">
              Enroll Now <FaArrowRight className="cta-arrow" />
            </button>

            <button
              className="cta-secondary-btn"
              onClick={() => usenavigate("/courses")}
            >
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
