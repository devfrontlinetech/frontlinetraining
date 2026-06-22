import React from "react";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "AWS Developer",
      message: "This platform helped me get my first IT job!",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Cloud Engineer",
      message: "Clear explanations and great certification.",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      role: "DevOps Trainee",
      message: "Well-structured course and flexible learning schedule.",
      rating: 4,
    },
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">Student Reviews</h2>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review-message">"{review.message}"</p>

              <div className="review-user">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
