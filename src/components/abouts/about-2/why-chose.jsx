import React from 'react';
import ChoseBox from '../about-1/chose-box-item';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    return (
        <section className="why-choose-area-3 edu-section-gap">
            <div className="container">
                <div className="row row--45">
                    <div className="section-title-flex section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <div className="left-content">
                            <h2 className="title">We Providing The <br /> Best <span className="color-secondary">Quality Online </span> Courses</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                        </div>
                        <div className="right-content">
                            <p>The influence of such a course depends on various factors, including how well it is structured, the level of expertise it provides, and the context in which it's applied. Here are some of the key influences and benefits of taking an Ethical Hacking course.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    <ChoseBox color="color-primary-style" icon="45" title="High Quality Courses" subtitle=" Our curriculum covers a wide range of programming languages and frameworks, ensuring that you gain practical skills and real-world experience." />

                    <ChoseBox color="color-secondary-style" icon="46" title="Life Time Access" subtitle="we understand that learning is a lifelong journey. Once you enroll, you can revisit the material anytime, allowing you to learn and understanding whenever needed." />

                    <ChoseBox color="color-extra08-style" icon="47" title="Expert Instructors" subtitle="Our instructors are not just teachers; they are seasoned professionals with extensive industry experience.ensuring that you receive top-notch education." />
                </div>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene"
                    animate={ {
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    } }
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-2 scene"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" />
                </motion.li>
                <li className="shape-3">
                    <motion.img style={{ y }} src="/assets/images/faq/shape-12.png" alt="shape" />
                </li>
            </ul>
        </section>
    )
}

export default WhyChose;