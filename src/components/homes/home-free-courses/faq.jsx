import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are the courses really free?",
      answer:
        "Yes, all our IT courses are 100% free including certification. There are no hidden charges.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer:
        "Yes, once you successfully complete the course and pass the assessment, you will receive a verified certificate.",
    },
    {
      question: "Are the courses beginner friendly?",
      answer:
        "Our courses are designed from beginner to advanced level with structured learning paths.",
    },
    {
      question: "Can I access courses anytime?",
      answer:
        "Yes, our platform offers flexible self-paced learning. You can access content anytime, anywhere.",
    },
    {
      question: "Is the certificate industry recognized?",
      answer:
        "Our certification is aligned with industry standards and helps improve your resume credibility.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${openIndex === index ? "faq-active" : ""}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`faq-arrow ${
                    openIndex === index ? "faq-rotate" : ""
                  }`}
                />
              </button>

              <div
                className={`faq-answer-wrapper ${
                  openIndex === index ? "faq-show" : ""
                }`}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
