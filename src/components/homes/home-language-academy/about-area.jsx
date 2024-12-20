import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    heading:[
        {active:true,target:'power-apps',title:'Power Apps'},
        {target:'power-automate',title:'Power Automate'},
        {target:'power-bi',title:'Power BI'}
    ],
    content:[
        {show:true,id:'power-apps',desc:"Power Apps is a suite of apps, services, and connectors, as well as a data platform, that provides a rapid development environment to build custom apps.",
        feature_list:['Comprehensive Coverage','Hands-On Learning']},
        {id:'power-automate',desc:"A comprehensive, end-to-end cloud automation platform powered by low code and AI.",
        feature_list:['Practical Workflow Creation','Advanced Automation Techniques']},
        {id:'power-bi',desc:"Find insights in your data and share rich analytics reports. Create rich, interactive reports with visual analytics using Power BI.",
        feature_list:['Data Visualization and Reporting','Data Transformation and Analysis']}
    ]
}


const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3 language-about">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800" src="/assets/images/about/pp-img.jpg" alt="About Image" />
                            <div className="main-img-wrapper">
                                <div className="main-img-inner" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800">
                                    <img className="main-img-2" src="/assets/images/about/pp1-img.webp" alt="About Image" />
                                </div>
                            </div>

                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img className="rotateit" src="/assets/images/faq/shape-04.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
{/*                                 <span className="pre-title">About Us</span> */}
                                <h2 className="title">We Provide Best <span className="color-primary">Services</span>  For You</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>

                            <ul className="nav nav-tabs" role="tablist">
                                {
                                    tabs.heading.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            
                            <div className="tab-content">
                                {
                                    tabs.content.map((item,i) => { 
                                        const {desc,feature_list,id,show} = item; 
                                        return (
                                            <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                                <p>{desc}</p>
                                                <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                            </div> 
                                        )
                                    })
                                }
                            </div>

                            <div className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
{/*                                 <a href="#" className="edu-btn">Learn more <i className="icon-4"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;
