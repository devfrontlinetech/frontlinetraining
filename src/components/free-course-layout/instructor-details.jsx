import React, { useState } from "react";
import { FaUserTie, FaTimes } from "react-icons/fa";
// import "../../../assets/css/free-course-style/instructor.css";

const InstructorCard = ({ instructor, instructorDetails }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="instructor-card">
        <h3>Instructor</h3>

        <div className="instructor-box">
          <div className="avatar">
            {instructorDetails?.avatar ? (
              <img
                src={instructorDetails.avatar}
                alt={instructorDetails?.name || instructor}
              />
            ) : (
              <FaUserTie />
            )}
          </div>

          <div className="instructor-info">
            <h4>{instructorDetails?.name || instructor}</h4>

            <p className="instructor-role">
              {instructorDetails?.role || "Instructor"}
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="instructor-stats">
          <div>
            <strong>{instructorDetails?.stats?.courses || "—"}</strong>
            <span>Courses</span>
          </div>
          <div>
            <strong>{instructorDetails?.stats?.students || "—"}</strong>
            <span>Students</span>
          </div>
          <div>
            <strong>{instructorDetails?.stats?.rating || "—"} ★</strong>
            <span>Rating</span>
          </div>
        </div>

        {/* SKILLS */}
        <div className="instructor-skills">
          {instructorDetails?.skills?.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>

        <button className="view-profile-btn" onClick={() => setShowModal(true)}>
          View Full Profile
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="instructor-modal-overlay">
          <div className="instructor-modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <div className="avatar large">
                {instructorDetails?.avatar ? (
                  <img src={instructorDetails.avatar} alt="" />
                ) : (
                  <FaUserTie />
                )}
              </div>

              <div>
                <h2>{instructorDetails?.name || instructor}</h2>
                <p>{instructorDetails?.role}</p>
              </div>
            </div>

            <p className="modal-desc">{instructorDetails?.description}</p>

            <div className="instructor-stats modal-stats">
              <div>
                <strong>{instructorDetails?.stats?.courses}</strong>
                <span>Courses</span>
              </div>
              <div>
                <strong>{instructorDetails?.stats?.students}</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>{instructorDetails?.stats?.rating} ★</strong>
                <span>Rating</span>
              </div>
            </div>

            <div className="instructor-skills">
              {instructorDetails?.skills?.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorCard;
