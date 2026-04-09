import React from 'react';
import HeroCourse from "./hero-course";
import Courses from "./courses";
import Category from "./category";
import WhyChoose from "./why-choose";
import Certificate from "./certificate";
import Reviews from "./reviews";
import Faq from "./faq";
import CtaArea from "./cta-area";


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                 <HeroCourse />
                 <Courses />
                 <Category />
                 <WhyChoose />
                 <Certificate />
                 <Reviews />
                 <Faq />
                 <CtaArea />
            </div>
        </div>
    )
}

export default index;
