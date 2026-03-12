import Link from "next/link";
import {
  HybridDistancePrograms,
  NonDegreeProgram,
  OffCanvasPrograms,
  OnlineDegree,
} from "../../../svg";

const contents = {
  category_data: [
    {
      icon: <OnlineDegree />,
      title: "Figma UI Design Mastery",
      text: "Learn modern UI design principles, layouts, typography, and color systems using Figma.",
      courses: 12,
      color: "color-primary-style",
      delay: "100",
    },
    {
      icon: <NonDegreeProgram />,
      title: "UX Research & Wireframing",
      text: "Master user research, personas, journey mapping, and low-fidelity wireframing techniques.",
      courses: 9,
      color: "color-secondary-style",
      delay: "200",
    },
    {
      icon: <OffCanvasPrograms />,
      title: "Prototyping & Interaction Design",
      text: "Create high-fidelity interactive prototypes with smart animations and transitions in Figma.",
      courses: 11,
      color: "color-extra08-style",
      delay: "300",
    },
    {
      icon: <HybridDistancePrograms />,
      title: "UI/UX Portfolio & Case Studies",
      text: "Build professional UI/UX case studies and portfolio projects to get hired faster.",
      courses: 6,
      color: "color-extra05-style",
      delay: "400",
    },
  ],
};

const CategoryArea = () => {
  return (
    <div className="edu-categorie-area categorie-area-1 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title pre-textsecondary">
            UI / UX Categories
          </span>
          <h2 className="title">
            Explore <span className="color-primary">Figma UI/UX</span> Design
            Learning Paths
          </h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
          <p className="figma-desc">
            Learn Figma UI/UX and design modern, user-friendly digital
            experiences.
          </p>
        </div>

        <div className="row g-5">
          {contents.category_data.map((category, i) => (
            <div
              key={i}
              className="col-lg-3 col-sm-6"
              data-sal-delay={category.delay}
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <div
                className={`categorie-grid categorie-style-1 ${category.color} edublink-svg-animate`}
              >
                <div className="icon">{category.icon}</div>
                <div className="content">
                  <Link href={`/course-details/${data.id}`} legacyBehavior>
                    <a>
                      <h5 className="title">{category.title}</h5>
                    </a>
                  </Link>
                  <p>{category.text}</p>
                  <div className="course-remain">
                    {category.courses} Courses
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
