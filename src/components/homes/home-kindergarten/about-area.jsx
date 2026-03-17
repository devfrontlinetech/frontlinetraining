import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/about/aiml-04.jpg" alt="About Image" />
                            </div>
                            <div className="main-img-2 bounce-slide">
                                <img src="/assets/images/about/aiml-03.jpg" alt="About Image" />
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1">
                                    <img src="/assets/images/about/shape-11.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img src="/assets/images/about/shape-12.png" alt="Shape" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={ {
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Welcome to the FrontLine</span>
                                <h2 className="title">How to effectively manage scope changes for AI/ML projects?</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Highlights how machine learning and AI can automate tasks and boost efficiency.Focuses on how AI can foster creative, cutting-edge advancements in business.</p>
                            </div>
                            <div className="about-mission" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">
                                    <div className="col-lg-6">
                                        <h5 className="title">Our Vision</h5>
                                        <p>AI and Machine Learning (ML) project or company should articulate a bold, forward-looking perspective on how AI and ML will shape the future. It should focus on the broader impact of these technologies on industries, society, and innovation. </p>
                                        <ul className="features-list">
                                            <li>online classes</li>
                                            <li>We provide practical classes</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="title">Our Mission</h5>
                                        <p> Innovation, automation, and data-driven insights.</p>
                                        <p> Forward-thinking, adaptation, and solving current and future challenges.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/contact-me">
                                <a className="edu-btn btn-curved" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Get Start Today <i className="icon-4"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;