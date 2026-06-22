import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const About = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area about-style-9">
            <div className="container edublink-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/about-17.webp" alt="About Image" />
                            <div className="author-box">
                                <img src="/assets/images/about/about-18.webp" alt="About Images" />
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(25).x,
                                        y: mouseReverse(25).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-36.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(25).x,
                                        y: mouseDirection(25).y
                                    } }
                                >
                                    <img src="/assets/images/others/shape-34.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-3 circle" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about-content">
                            <div 
                                className="section-title section-left" 
                                data-sal-delay="150" 
                                data-sal="slide-up" 
                                data-sal-duration="800"
                            >
                                <span className="pre-title">About Us</span>

                                <h2 className="title">
                                    Individual <span className="color-secondary">Nutrition</span> Counseling & Coaching
                                </h2>

                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>

                                <p>
                                    We provide personalized nutrition guidance and coaching tailored to your lifestyle, goals, and health needs. 
                                    Our approach focuses on building sustainable habits, improving overall wellness, and helping you achieve long-term results through expert support and practical strategies.
                                </p>
                            </div>

                            <ul 
                                className="features-list" 
                                data-sal-delay="150" 
                                data-sal="slide-up" 
                                data-sal-duration="800"
                            >
                                <li>Certified and experienced nutrition experts</li>
                                <li>Flexible online and remote coaching sessions</li>
                                <li>Lifetime access to learning resources and updates</li>
                            </ul>

                            <a href="#" className="edu-btn">
                                Get Start Today <i className="icon-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="shape-group">
                    <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-33.png" alt="Shape" />
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default About;