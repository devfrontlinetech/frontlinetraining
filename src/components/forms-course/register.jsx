import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Register = () => {
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
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

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

      setSuccess(res.data.message || "Registered successfully");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* LEFT IMAGE */}
        <div className="register-image">
          {/* ✅ FIXED IMAGE PATH */}
          <img src="/assets/images/free-course/register.jpg" alt="Register" />
        </div>

        {/* RIGHT FORM */}
        <div className="register-card">
          <div className="register-header">
            <h2>Free Course Registration</h2>
            <p>Fill your details to enroll and get certificate</p>
          </div>

          {error && <p className="register-error">{error}</p>}
          {success && <p className="register-success">{success}</p>}

          <form className="register-form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            {/* Course */}
            <div className="form-group">
              <label>Course</label>
              <select
                name="course"
                className="form-input"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="React JS">React JS</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Password */}
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label>Confirm</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm"
                />
              </div>
            </div>

            <button className="register-btn" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Footer */}
          <p className="register-footer">
            Already have an account?{" "}
            <Link href="/login" className="register-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
