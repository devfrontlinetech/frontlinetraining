import React, { useEffect, useState } from "react";
// import Header from "../../layout/header";
// import Footer from "../../layout/footer";
// import "../../assets/css/free-course-style/get-certificate.css";

const CertificatePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!user) return null;

  return (
    <div className="cert-wrapper">
      <div className="certificate">
        <div className="cert-left">
          <p className="cert-date">
            Awarded on {new Date().toLocaleDateString()}
          </p>

          <h1 className="cert-title">CERTIFICATE OF COMPLETION</h1>

          <p>This certificate is presented to</p>

          <h2 className="cert-name">{user.fullName || "User Name"}</h2>

          <p>
            is hereby awarded this certificate for successfully completing the{" "}
            <strong>{user.course || "Course Name"}</strong> program. This
            achievement signifies dedication, proficiency, and the successful
            demonstration of essential skills and knowledge required in the
            field.
          </p>

          <div className="cert-signatures">
            <div>
              <div className="line"></div>
              <p>Anbu</p>
              <small>Instructor</small>
            </div>

            <div>
              <div className="line"></div>
              <p>Manager</p>
              <small>Frontline Technologies</small>
            </div>
          </div>
        </div>

        <div className="cert-right">
          <h2 className="cert-right-title">
            FRONTLINE <br />
            <span>TECHNOLOGIES</span>
          </h2>

          <button onClick={handlePrint} className="print-btn">
            Download Certificate
          </button>
        </div>
      </div>

      {/* <button onClick={handlePrint} className="print-btn">
          Download Certificate
        </button> */}
    </div>
  );
};

export default CertificatePage;
