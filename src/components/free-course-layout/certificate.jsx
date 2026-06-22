import React from "react";
import { useRouter } from "next/router";
import { FaGraduationCap } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

const Certificate = () => {
  const router = useRouter();

  const certificates = [
    {
      icon: <FaGraduationCap />,
      title: "Earn Certificate",
      description: "Complete your course and get a verified certificate.",
      buttonText: "Get Certificate",
      route: "/course-login",
    },
    {
      icon: <GiTrophy />,
      title: "Advanced Certificate",
      description: "Unlock premium certification after completion.",
      buttonText: "Unlock Now",
      route: "/certificate-advanced",
    },
  ];

  const handleClick = (item) => {
    router.push(item.route);
  };

  return (
    <div className="certificate-card-wrapper">
      {certificates.map((item, index) => (
        <div
          key={index}
          className="certificate-card"
          onClick={() => handleClick(item)}
        >
          <div className="certificate-box">
            <i className="certificate-icon">{item.icon}</i>
            <h2 className="certificate-heading">{item.title}</h2>
          </div>

          <p className="certificate-desc">{item.description}</p>

          <button
            className="certificate-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(item);
            }}
          >
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
