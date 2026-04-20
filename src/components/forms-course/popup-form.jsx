import React, { useState } from "react";
// import "../../assets/css/free-course-style/popup.css";
import axios from "axios";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { fullName, email, phone, course, password, confirmPassword } =
      formData;

    if (
      !fullName ||
      !email ||
      !phone ||
      !course ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/register", {
        fullName,
        email,
        phone,
        course,
        password,
      });

      alert(res.data.message);

      setLoading(false);
      onClose(); // ✅ close popup after success
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <div className="login-header">
          <h2 className="login-title">Free IT Course Registration</h2>
          <p className="login-description">Fill your details to enroll and get certificate</p>
        </div>

        {error && <p className="error-text">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />

          <select name="course" onChange={handleChange}>
            <option value="">-- Select Course --</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="React JS">React JS</option>
            <option value="Python Programming">Python Programming</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
      <div className="password-group">
            <input
            className="password-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            className="password-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
      </div>
        

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register Now"}
          </button>
        </form>
        <p className="login-footer">
          Already have an account?{" "}
          <a href="/course-login" className="register-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default PopupForm;
