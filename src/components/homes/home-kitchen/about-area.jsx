import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const lists = [
    //'Cooking award achived', 
    'Available online courses', 
    'Online Certification'
];

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-section-gap edu-about-area about-style-4">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                                <img src="/assets/images/about/PD1.jpg" alt="About Image" />
                            </div>
                            <img className="main-img-2" src="/assets/images/about/PD2.jpg" alt="About Image" data-sal-delay="60" data-sal="slide-up" data-sal-duration="900" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-39.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-07.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About</span>
                                <h4 className="title"> we offer an immersive training program designed to equip you with the essential skills in Python programming and data science.</h4>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                                <p>Here’s a detailed overview of what Python offers for data science and why it's a preferred choice for many professionals.</p>
                            </div>
                            <ul className="features-list"> {lists.map((l, i) => <li key={i}>{l}</li>)} </ul>
                            <Link href="/contact-me">
                                <a className="edu-btn">Get Start Today <i className="icon-4"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;