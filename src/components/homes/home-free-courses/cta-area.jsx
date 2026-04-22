import React from "react";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { useRouter } from "next/navigation";

function CTA() {
  const router = useRouter();

  return (
    <section className="cta-block">
      <div className="cta-block__container">
        <div className="cta-block__content">
          <h2 className="cta-block__title">
            Start Your IT Career Today{" "}
            <FaRocket className="cta-block__rocket" />
          </h2>

          <p className="cta-block__subtitle">
            Join thousands of learners upgrading their skills with free
            industry-recognized certification programs.
          </p>

          <div className="cta-block__buttons">
            <button className="cta-block__primary-btn">
              Enroll Now <FaArrowRight className="cta-block__arrow" />
            </button>

            <button
              className="cta-block__secondary-btn"
              onClick={() => router.push("/courses")}
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
