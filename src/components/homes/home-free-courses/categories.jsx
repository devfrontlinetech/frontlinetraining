import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaPython,
  FaDatabase,
  FaBrain,
  FaLaptopCode,
  FaCloud,
  FaTools,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

function Categories() {
  const categories = [
    { name: "Web Development", icon: <FaLaptopCode /> },
    { name: "Programming", icon: <FaCode /> },
    { name: "Cyber Security", icon: <FaShieldAlt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Data Science", icon: <FaDatabase /> },
    { name: "Artificial Intelligence", icon: <FaBrain /> },
    { name: "Cloud Computing", icon: <FaCloud /> },
    { name: "DevOps", icon: <FaTools /> },
    { name: "Machine Learning", icon: <FaRobot /> },
    { name: "Mobile App Development", icon: <FaMobileAlt /> },
  ];

  const handleCategoryClick = (category) => {
    console.log("Selected:", category);
    // Later you can navigate:
    // navigate(`/courses?category=${category}`)
  };

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">Popular Categories</h2>
        <p className="categories-subtitle">
          Explore top trending IT domains and start learning today.
        </p>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <h4 className="category-name">{cat.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
