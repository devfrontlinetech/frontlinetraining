"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Certification() {
  const router = useRouter();

  const certificateFeatures = [
    {
      title: "Verified Certificate",
      description:
        "Receive an industry-recognized certificate after completion.",
    },
    {
      title: "Share on LinkedIn",
      description:
        "Add your certificate to LinkedIn and boost your profile visibility.",
    },
    {
      title: "Career Advancement",
      description: "Improve your resume and stand out in IT job applications.",
    },
  ];

  return (
    <section className="certification-section">
      <div className="container certification-wrapper">

        <div className="certificate-image">
          <Image
            src="/assets/images/free-course/certificate.png"
            alt="Free Course Certificate"
            width={500}
            height={350}
          />
        </div>

        <div className="certificate-content">
          <h2>Earn Your Professional Certificate</h2>

          {certificateFeatures.map((feature, index) => (
            <div key={index} className="certificate-feature">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}

          <button
            className="primary-btn"
            onClick={() => router.push("/course-login")}
          >
            Start Learning
          </button>
        </div>

      </div>
    </section>
  );
}

export default Certification;