import React from "react";
import { FaCertificate, FaBriefcase, FaClock } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaCertificate />,
      title: "Free Certification",
      description: "Verified certificates at zero cost.",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Ready Content",
      description: "Industry-aligned curriculum.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Learning",
      description: "Learn anytime at your own pace.",
    },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
