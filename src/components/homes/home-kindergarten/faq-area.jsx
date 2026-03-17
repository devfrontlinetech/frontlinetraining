import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const accordion_items = [
    {
        id: 'collapseOne', 
        show: false, 
        title: 'What kind of support and training do you provide to clients using AI and ML systems?',
        style:'style-extra02',
        desc: 'When providing support and training to clients using AI and ML systems, its essential to ensure that they have both the technical knowledge and the operational guidance they need to successfully integrate, use, and maintain these advanced technologies.'
    },
    {
        id: 'collapseTwo', 
        show: false,
        title: 'Can you provide examples of successful AI/ML projects?',
        style:'style-extra05',
        desc: 'AI and ML are being used in a wide range of industries to solve complex problems, enhance business operations, and drive innovation.'
    },
    {
        id: 'collapseThree', 
        show: false, 
        title: 'How do you handle client concerns about data privacy and security when implementing AI solutions?',
        style:'style-primary',
        desc: 'When implementing AI solutions, we prioritize data privacy and security by adhering to industry best practices and regulatory standards such as GDPR, CCPA, and HIPAA. .'
    }
];

const FaqArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-faq-area faq-style-4">
            <div className="container">
                <div className="row g-5 row--45 align-items-end">
                    <div className="col-lg-6">
                        <div className="edu-faq-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Services For Everyone</span>
                                <h2 className="title">Transformative AI & ML Services</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>
                            <div className="faq-accordion" id="faq-accordion" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="accordion">
                                    {accordion_items.map((item, i) => {
                                        const { desc, id, show, title,style } = item;
                                        return (
                                            <div key={i} className="accordion-item">
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${show ? '' : 'collapsed'} ${style}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false'}>
                                                        {title}
                                                    </button>
                                                </h5>
                                                <div id={id} className={`accordion-collapse collapse ${show ? 'show' : ''}`} data-bs-parent="#faq-accordion">
                                                    <div className="accordion-body">
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-thumbnail">
                            <div className="thumbnail">
                                <img src="/assets/images/faq/Ques-01.webp" alt="Faq Images"/>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene"
                                    animate={ {
                                        x: mouseReverse(35).x,
                                        y: mouseReverse(35).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-12.png" alt="Shape Images"/>
                                </motion.li>
                                <motion.li className="shape-2 scene"
                                    animate={ {
                                        x: mouseDirection(40).x,
                                        y: mouseDirection(40).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape Images"/>
                                </motion.li>
                                <motion.li className="shape-3 scene"
                                    animate={ {
                                        x: mouseReverse(35).x,
                                        y: mouseReverse(35).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-15.png" alt="Shape Images"/>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea;