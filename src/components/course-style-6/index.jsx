import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseSixArea from "./course-6-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Figma UI/UX Design" subtitle="Figma UI/UX" />
        <CourseSixArea />
        <Footer />
      </div>
    </div>
  );
};

export default index;
