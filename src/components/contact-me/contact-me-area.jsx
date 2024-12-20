import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import { SocialShare } from '../social-share';

const ContactMeArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="section-gap-equal contact-me-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="contact-me">
                            <div className="inner">
                                <div className="thumbnail">
                                    <div className="thumb">
                                        <img src="/assets/images/others/contact.webp" alt="Contact Me" />
                                    </div>
                                    <ul className="shape-group">
                                        <motion.li className="shape-1 scene"
                                            animate={ {
                                                x: mouseReverse(30).x,
                                                y: mouseReverse(30).y
                                            } }
                                        >
                                            <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                        </motion.li>
                                        <motion.li className="shape-2 scene"
                                            animate={ {
                                                x: mouseDirection(30).x,
                                                y: mouseDirection(30).y
                                            } }
                                        >
                                            <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                        </motion.li>
                                        <li className="shape-3">
                                            <img src="/assets/images/about/shape-07.png" alt="Shape" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="contact-us-info">
                                    <h3 className="heading-title">I will Answer all Your Questions</h3>
                                    <ul className="address-list">
                                        <li>
                                            <h5 className="title">Address</h5>
                                            <p>29/11,A Old ByPass Road, Near SBI, Karur 1.</p>
                                        </li>
                                        <li>
                                            <h5 className="title">Email</h5>
                                            <p><a href="mailto:info@frontlinetraining.in">info@frontlinetraining.in</a></p>
                                        </li>
                                        <li>
                                            <h5 className="title">Phone</h5>
                                            <p><a href="tel:97896 55455">(+91) 97896 55455</a></p>
                                        </li>
                                    </ul>
                                    <ul className="social-share">
                                        <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                        <SocialShare/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMeArea;
