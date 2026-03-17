import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
    {
        color:'color-secondary-style',
        icon:'icon-81',
        title:'Exclusive Program',
        text:' This immersive training combines expert-led instruction, hands-on projects, and personalized mentorship to ensure you master data analysis skills.'
    },
    {
        color:'color-primary-style',
        icon:'icon-82',
        title:'Online Training',
        text:'Mastering Data Analysis: From Basics to Advanced Techniques'
    }
    //{
     //   color:'color-extra05-style',
     //   icon:'icon-83',
      //  title:'Individual Care',
       // text:'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
    //}
];

const WhyChose = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
    return (
        <div className="why-choose-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5 row--45">
                    <div className="col-lg-6">
                        <div className="why-choose-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Hey</span>
                                <h2 className="title">Why Choose Data Analysis </h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>The demand for skilled data analysts is growing across industries, leading to numerous job opportunities and competitive salaries.</p>
                            </div>
                            <div className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {features.map((item,i) => {
                                    const {color,icon,text,title} = item;
                                    return (
                                        <div key={i} className={`features-box ${color}`}>
                                            <div className="icon">
                                                <i className={icon}></i>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{title}</h5>
                                                <p>{text}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="why-choose-gallery">
                            <div className="gallery-thumbnail">
                                <div className="thumbnail thumbnail-1">
                                    <img src="/assets/images/others/data.jpg" alt="Why Choose"/>
                                </div>
                                <motion.div className="thumbnail thumbnail-2" style={{ y }}>
                                    <img src="/assets/images/others/data3.jpg" alt="Why Choose"/>
                                </motion.div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/about/shape-14.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/about/shape-10.png" alt="Shape Images"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChose;