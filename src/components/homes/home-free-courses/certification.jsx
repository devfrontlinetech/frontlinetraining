import React from "react";
import { useNavigate } from "react-router-dom";
// import Certificate from "../../../assets/images/free-course/certificate.png";
import Certificate from "../../../../public/assets/images/free-course/certificate.png";

function Certification() {
  const navigate = useNavigate();
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
                    <img src={Certificate} alt="Free Course Certificate" />
                 </div>

                  <div className="certificate-content">
                       <h2>Earn Your Professional Certificate</h2>

                         {certificateFeatures.map((feature, index) => (
                            <div key={index} className="certificate-feature">
                                 <h4>{feature.title}</h4>
                                 <p>{feature.description}</p>
                             </div>
                           ))} 

                            <button className="primary-btn" onClick={() => navigate("/login")}>Start Learning</button>
                   </div>
               </div>
    </section>
  );
}

export default Certification;
