import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const contents = {
    pre_title: 'Testimonials',
    title: <>What Our Students <br /> Have To Say</>,
    desc: "Real Experiences, Real Results.",
    testimonial_items: [
        {
            //logo: '/assets/images/testimonial/logo-01.png',
            desc: " I now have the skills and confidence to pursue a career in web development. I've even landed an internship where I can continue to grow and learn in a professional setting.",
            ratings: [1, 2, 3, 4, 5],
            img: "/assets/images/testimonial/test-01.jpg",
            name: "Krish",
            title: 'Student'
        },
        {
            //logo: '/assets/images/testimonial/logo-02.png',
            desc: "Best training in core concepts, curriculum is well-structured, covering everything from the basics to advanced topics, and the support for beginners is great.",
            ratings: [1, 2, 3, 4, 5],
            img: "/assets/images/testimonial/test-02.jpg",
            name: "Samual",
            title: 'Student'
        },
        {
            //logo: '/assets/images/testimonial/logo-03.png',
            desc: "Took fasttrack training for MERN and got trained for 30 days.  Mongodb and Node with express was easy but React was very hard for me but they explained  multiple times with hands on project.",
            ratings: [1, 2, 3, 4, 5],
            img: "/assets/images/testimonial/test-03.jpg",
            name: "Riju",
            title: 'Developer'
        },
        {
            //logo: '/assets/images/testimonial/logo-02.png',
            desc: "They trained me to design App and posted on sites like behance and dribble, I was often contacted about where I took training. Got impressive response too. Ill give five star ratine for teaching.",
            ratings: [1, 2, 3, 4, 5],
            img: "/assets/images/testimonial/test-04.jpg",
            name: "Geetha",
            title: 'Client'
        }
    ]
}

const { desc, pre_title, testimonial_items, title } = contents;

const Testimonial = ( { about_p_2 } ) => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const [loop, setLoop] = useState( false );
    useEffect( () => setLoop(true), [])
    return (
        <div className={`testimonial-area-2 ${about_p_2?'edu-section-gap':'section-gap-large'}`}>
            <div className="container edublink-animated-shape">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <span className="pre-title">{pre_title}</span>
                            <h2 className="title">{title}</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="testimonial-activation swiper"
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay, Pagination]}
                    loop={loop}
                    grabCursor={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000
                    } }
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    } }
                >
                    {testimonial_items.map((item, i) => {
                        const { desc, img, logo, name, ratings, title } = item;
                        return (
                            <SwiperSlide key={i}>
                                <div className="testimonial-slide">
                                    <div className="content">
                                      {/* <div className="logo"><img src={logo} alt="Logo" /></div> */}
                                        <p>{desc}</p>
                                        <div className="rating-icon">
                                            {ratings.map((r) => <i key={r} className="icon-23"></i>)}
                                        </div>
                                    </div>
                                    <div className="author-info">
                                        <div className="thumb">
                                            <img src={img} alt="Testimonial" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">{name}</h5>
                                            <span className="subtitle">{title}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="swiper-pagination"></div>

                <ul className="shape-group">
                    <motion.li className="shape-1 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseReverse(25).x,
                            y: mouseReverse(25).y
                        } }
                    >
                        <img src="/assets/images/about/shape-30.png" alt="Shape" />
                    </motion.li>
                    <motion.li className="shape-2 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseDirection(25).x,
                            y: mouseDirection(25).y
                        } }
                    >
                        <img src="/assets/images/about/shape-25.png" alt="Shape" />
                    </motion.li>
                </ul>
            </div>
            <ul className="shape-group">
                <li className="shape-3" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                    <img className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" alt="Shape" />
                    <img className="d-none-shape-dark" src="/assets/images/others/dark-map-2-shape-3.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default Testimonial;
