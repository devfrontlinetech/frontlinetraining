import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

function FeatureBox({ img, color, title, icon, text }) {
    return (
        <div className="col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div className={`why-choose-box-3 features-box ${color}`}>
                <div className="thumbnail">
                    <img src={`/assets/images/others/crs${img}.jpg`} alt="why choose image" />
                </div>
                <div className="content">
                    <div className="icon">
                        <i className={`icon-${icon}`}></i>
                    </div>
                    <h4 className="title">{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="why-choose-area-4 edu-section-gap">
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Why choose Digital Marketing</span>
                    <h4 className="title"> Digital<span className="color-secondary"> marketing </span> and content creation to market research and brand management, allowing for career growth and specialization. <br /> </h4>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    <FeatureBox color="color-primary-style" img="1" icon="45" title="High Quality Courses"
                    text="Through a combination of expert instruction, hands-on projects,  you will gain practical knowledge and actionable insights." />

                    <FeatureBox color="color-secondary-style" img="2" icon="46" title="Life Time Access"
                    text="Enjoy continuous access to course materials, updates, and new content, allowing you to learn at your own pace." />

                    <FeatureBox color="color-extra08-style" img="3" icon="47" title="Expert Instructors"
                    text=" With over 10 years of experience in digital marketing, Jane has worked with Fortune 500 companies to develop successful online campaigns. " />
                </div>
                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" alt="shape" />
                    </li>
                    <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                        animate={ {
                            x: mouseReverse(40).x,
                            y: mouseReverse(40).y
                        } }
                    >
                        <span></span>
                    </motion.li>
                    <li className="shape-3 circle scene sal-animate" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span className="d-block"></span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhyChose;