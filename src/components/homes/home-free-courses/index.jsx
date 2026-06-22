import React, { useEffect, useState } from "react";
import { FooterFive, HeaderFour } from "../../../layout";
import HeroCourse from "./hero-course";
import Courses from "./free-course-area";
import Category from "./categories";
import WhyChoose from "./why-choose-area";
import Certificate from "./certification";
import Reviews from "./reviews";
import Faq from "./faq";
import CtaArea from "./cta-area";
import PopupForm from "../../forms-course/popup-form"; // ✅ import popup

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Show popup when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // delay (optional)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <HeaderFour no_top_bar={true} />

        <HeroCourse />
        <Courses />
        <Category />
        <WhyChoose />
        <Certificate />
        <Reviews />
        <Faq />
        <CtaArea />
        <FooterFive />

        {/* ✅ POPUP RENDER */}
        {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default Index;

// import React from 'react';
// import { FooterFive, HeaderFour } from "../../../layout";
// import HeroCourse from "./hero-course";
// import Courses from "./free-course-area";
// import Category from "./categories";
// import WhyChoose from "./why-choose-area";
// import Certificate from "./certification";
// import Reviews from "./reviews";
// import Faq from "./faq";
// import CtaArea from "./cta-area";

// const index = () => {
//     return (
//         <div className='sticky-header'>
//             <div id="main-wrapper" className="main-wrapper">
//                 <HeaderFour no_top_bar={true} />
//                  <HeroCourse />
//                  <Courses />
//                  <Category />
//                  <WhyChoose />
//                  <Certificate />
//                  <Reviews />
//                  <Faq />
//                  <CtaArea />
//                  <FooterFive />
//             </div>
//         </div>
//     )
// }

// export default index;
