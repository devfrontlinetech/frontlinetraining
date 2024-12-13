import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const features = [
    {
        icon:'icon-37 watch-icon',
        color:'color-secondary-style',
        title:'Why we choose MERN!',
        text:'Learning the MERN stack (MongoDB, Express.js, React, Node.js) offers several advantages for developers looking to enhance their skills in web development. '
    },
    {
        icon:'icon-38 art-board-icon',
        color:'color-primary-style',
        title:' Full-Stack Development',
        text:'The MERN stack allows you to build both front-end and back-end applications using JavaScript, streamlining the development process and enabling you to work across the entire stack.'
    },
    {
        icon:'icon-39 fitness-icon',
        color:'color-extra05-style',
        title:'RESTful API Development',
        text:'Express.js makes it straightforward to create RESTful APIs, allowing for seamless communication between the front end and back end..'
    }
]

const CollegeCampus = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-campus-area gap-lg-top-equal">
            <div className="container edublink-animated-shape">
                <div className="row g-5">
                    <div className="col-xl-7" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                        <div className="campus-image-gallery">
                            <div className="campus-thumbnail">
                                <div className="thumbnail">
                                    <img src="/assets/images/others/Mern1.jpg" alt="Campus" />
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <span></span>
                                </motion.li>
                                <motion.li className="shape-2 scene"
                                    animate={ {
                                        x: mouseReverse(25).x,
                                        y: mouseReverse(25).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-21.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene"
                                    animate={ {
                                        x: mouseDirection(25).x,
                                        y: mouseDirection(25).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5" data-sal-delay="50" data-sal="slide-left" data-sal-duration="800">
                        <div className="campus-content">
                            <div className="inner">
                                <div className="section-title section-left">
                                    <span className="pre-title">MERN</span>
                                    <h2 className="title">"Transform Ideas into Reality with MERN!"</h2>
                                    <span className="shape-line">
                                        <i className="icon-19"></i>
                                    </span>
                                </div>
                                <div className="features-list"> 
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
                            <ul className="shape-group">
                                <motion.li className="shape-4 scene"
                                    animate={ {
                                        x: mouseReverse(25).x,
                                        y: mouseReverse(25).y
                                    } }
                                >
                                    <span></span>
                                </motion.li>
                                <motion.li className="shape-5 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <span></span>
                                </motion.li>
                                <motion.li className="shape-6 scene"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-25.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeCampus;