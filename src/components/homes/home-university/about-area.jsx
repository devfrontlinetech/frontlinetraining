import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-edu',title:'About FrontLine'
        },
        {
            target:'about-mission',title:'Our Mission'
        },
        {
            target:'about-vision',title:'Our Vision'
        }
    ],
  content: [
    {
        show: true,
        id: 'about-edu',
        desc: "We provide high-quality education designed to build practical skills and real-world knowledge. Our approach focuses on helping learners grow with confidence and achieve their career goals.",
        feature_list: [
            'Education awards achieved',
            'Wide range of online courses'
        ]
    },
    {
        id: 'about-mission',
        desc: "Our mission is to deliver accessible and effective learning experiences that empower individuals to succeed in their chosen fields. We focus on clarity, quality, and continuous improvement.",
        feature_list: [
            'Industry expert instructors',
            'Up-to-date course content'
        ]
    },
    {
        id: 'about-vision',
        desc: "Our vision is to create a global learning platform where anyone can gain valuable skills anytime, anywhere. We aim to make education simple, practical, and accessible for everyone.",
        feature_list: [
            'Online remote learning',
            'Lifetime access for learning'
        ]
    }
]
}

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About Us</span>
                                <h2 className="title">We Provide Best <span className="color-primary">Education</span> Services For You</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <ul className="nav nav-tabs" role="tablist"> 
                                {
                                    tabs.title.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            <div className="tab-content"> 
                                {tabs.content.map((item,i) => { const {desc,feature_list,id,show} = item; 
                                    return (
                                        <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                            <p>{desc}</p>
                                            <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                        </div> 
                                    )})
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" src="/assets/images/about/our-service-02.webp" alt="About Image" />
                            <img className="main-img-2" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800" src="/assets/images/about/our1.jpg" alt="About Image" />
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
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-5">
                    <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-6">
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default AboutArea;