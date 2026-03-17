import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const accordion_items = [
  {
    id: "collapseOne",
    show: true,
    title: "Is this course suitable for beginners?",
    desc: "Yes. We start with UI/UX fundamentals and Figma basics before moving into advanced prototyping and design systems. No technical or design background is required.",
  },
  {
    id: "collapseTwo",
    show: false,
    title: "What tools will I learn?",
    desc: "You will master Figma for UI design, interactive prototyping, auto layout, components, and collaborative workflows used by professional product teams.",
  },
  {
    id: "collapseThree",
    show: false,
    title: "Will I get a certificate after completion?",
    desc: "Yes. After successfully completing all projects and assignments, you will receive an industry-recognized certificate to strengthen your portfolio and job applications.",
  },
];

const FaqArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="edu-faq-area faq-style-1">
      <div className="container">
        <div className="row g-5 row--45">
          <div className="col-lg-6">
            <div className="edu-faq-gallery">
              <div className="row g-5">
                <div
                  className="col-6"
                  data-sal-delay="50"
                  data-sal="slide-right"
                  data-sal-duration="800"
                >
                  <div className="faq-thumbnail thumbnail-1">
                    <img src="/assets/images/faq/faq01.jpg" alt="Faq Images" />
                  </div>
                </div>
                <div
                  className="col-6"
                  data-sal-delay="100"
                  data-sal="slide-left"
                  data-sal-duration="800"
                >
                  <div className="faq-thumbnail thumbnail-2">
                    <img src="/assets/images/faq/faq02.jpg" alt="Faq Images" />
                  </div>
                </div>
                <div
                  className="col-6"
                  data-sal-delay="50"
                  data-sal="slide-right"
                  data-sal-duration="800"
                >
                  <div className="faq-thumbnail thumbnail-3">
                    <img src="/assets/images/faq/faq03.jpg" alt="Faq Images" />
                  </div>
                </div>
                <div
                  className="col-6"
                  data-sal-delay="100"
                  data-sal="slide-left"
                  data-sal-duration="800"
                >
                  <div className="faq-thumbnail thumbnail-4">
                    <img
                      src="/assets/images/faq/faq04.jpg"
                      alt="Faq Images"
                    />
                  </div>
                </div>
              </div>

              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene shape-light"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    src="/assets/images/faq/shape-02.png"
                    alt="Shape Images"
                  />
                </motion.li>
                <motion.li
                  className="shape-1 scene shape-dark"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    src="/assets/images/faq/dark-shape-02.png"
                    alt="Shape Images"
                  />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    src="/assets/images/faq/shape-03.png"
                    alt="Shape Images"
                  />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    src="/assets/images/faq/shape-04.png"
                    alt="Shape Images"
                  />
                </motion.li>
                <motion.li
                  className="shape-4 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    src="/assets/images/faq/shape-05.png"
                    alt="Shape Images"
                  />
                </motion.li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <div className="edu-faq-content">
              <div className="section-title section-left">
                <span className="pre-title">FAQ’s</span>

                <h2 className="title">
                  Answers About Our{" "}
                  <span className="color-secondary">
                    UI/UX Design  Program
                  </span>
                </h2>

                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
              </div>
              <div className="faq-accordion" id="faq-accordion">
                <div className="accordion">
                  {accordion_items.map((item, i) => {
                    const { desc, id, show, title } = item;
                    return (
                      <div key={i} className="accordion-item">
                        <h5 className="accordion-header">
                          <button
                            className={`accordion-button ${show ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            aria-expanded={show ? "true" : "false"}
                          >
                            {" "}
                            {title}{" "}
                          </button>
                        </h5>
                        <div
                          id={id}
                          className={`accordion-collapse collapse ${show ? "show" : ""}`}
                          data-bs-parent="#faq-accordion"
                        >
                          <div className="accordion-body">
                            <p>{desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img
                    src="/assets/images/about/shape-02.png"
                    alt="Shape Images"
                  />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <span></span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
