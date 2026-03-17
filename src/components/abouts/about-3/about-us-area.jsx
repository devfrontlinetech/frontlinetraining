import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

// MissionItem
function MissionItem({ color, icon, title, text }) {
    return (
        <div className="single-item" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div className={`icon color-extra${color}`}><i className={`icon-${icon}`}></i></div>
            <div className="content">
                <h4 className="title">{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

const AboutUsArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-section-gap edu-about-area about-style-8">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title"></span>
                                <h2 className="title"> <span className="color-secondary">DIGITAL MARKETING</span> <h3>Services For You...</h3></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Online platforms, tools, and technologies to promote products and services. It encompasses a wide range of strategies and channels aimed at connecting with customers where they spend much of their time: online</p>  
                            </div>
                           
                             <div className="about-mission">
                                <MissionItem color="02" icon="51" title="Our Mission" text="Digital marketing solutions that empower businesses to connect with their audience, growth, and success in an ever-evolving digital landscape." />
                                <MissionItem color="06" icon="52" title="Our Vision" text="  We strive to create meaningful connections between brands and their audiences through data-driven strategies and exceptional service." />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="row g-5" id="masonry-gallery">
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-1 mb--30" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                                        <img src="/assets/images/about/digi01.jpg" alt="About Images" />
                                    </div>

                                    <div className="thumbnail thumbnail-4" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                                        <img src="/assets/images/about/digi03.webp" alt="About Images" />
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-2 mb--30" data-sal-delay="50" data-sal="slide-down" data-sal-duration="1000">
                                        <img src="/assets/images/about/digi02.webp" alt="About Images" />
                                    </div>
                                    <div className="thumbnail thumbnail-3" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                                        <img src="/assets/images/about/digi04.jpg" alt="About Images" />
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-33.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-25.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    } }
                                >
                                    <span></span>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsArea;
