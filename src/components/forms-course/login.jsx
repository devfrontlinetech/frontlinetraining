import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // ✅ FIXED
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted"); // ✅ debug

    setError("");

    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/login", formData);

      console.log("Response:", res.data); // ✅ debug

      if (res.data.token) {
        const userData = {
          id: res.data.user?.id,
          fullName: res.data.user?.fullName || res.data.user?.name || fullName,
          email: res.data.user?.email || email,
          course: res.data.user?.course || course,
        };

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        // ✅ REDIRECT
        router.push("/certificate-page");
        // OR fallback:
        // window.location.href = "/certificate-page";
      } else {
        setError("Invalid login response");
      }
    } catch (err) {
      console.log("Error:", err); // ✅ debug
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fclg-page">
      <div className="fclg-card">
        <div className="fclg-header">
          <h2>Course Login Portal</h2>
          <p>Login to access your certificate courses</p>
        </div>

        {error && <p className="fclg-error">{error}</p>}

        <form className="fclg-form" onSubmit={handleSubmit} autoComplete="off">
          <input type="text" name="fakeuser" className="fclg-hidden" />
          <input type="password" name="fakepass" className="fclg-hidden" />

          {/* FULL NAME */}
          <div className="fclg-group">
            <label className="fclg-label">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="fclg-input"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>

          {/* COURSE */}
          {/* <div className="fclg-group">
            <label className="fclg-label">Course</label>
            <select
              name="course"
              className="fclg-input"
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
          </div> */}

          {/* EMAIL */}
          <div className="fclg-group">
            <label className="fclg-label">Email</label>
            <input
              name="email"
              type="email"
              className="fclg-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          {/* PASSWORD */}
          <div className="fclg-group">
            <label className="fclg-label">Password</label>
            <div className="fclg-password">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="fclg-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <span
                className="fclg-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* REMEMBER */}
          {/* <div className="fclg-extra">
            <label className="fclg-checkbox-label">
              <input
                type="checkbox"
                name="remember"
                className="fclg-checkbox"
                checked={formData.remember}
                onChange={handleChange}
              />  
              Remember me
            </label>
          </div> */}

          <button type="submit" className="fclg-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="fclg-footer">
          Don’t have an account?{" "}
          <Link href="/register" className="fclg-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
