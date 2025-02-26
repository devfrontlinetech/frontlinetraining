import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const slider_data = [
    {
        id: 1,
        src: '/assets/images/bg/bg01.jpg',
        subtitle: '"Master the MERN Stack: Build Dynamic Web Applications"',
        title: '"Learn, Build, and Scale with MongoDB, Express.js, React, and Node.js"',
        sm_text: 'Whether you re a beginner or an experienced developer, our resources will help you master MERN and unleash your potential.',
        btn_text: 'Find courses'
    },
    {
        id: 2,
        src: '/assets/images/bg/bg02.jpg',
        subtitle: '"Master the MERN Stack: Build Dynamic Web Applications"',
        title: '"Learn, Build, and Scale with MongoDB, Express.js, React, and Node.js"',
        sm_text: 'Whether you re a beginner or an experienced developer, our resources will help you master MERN and unleash your potential.',
        btn_text: 'Find courses'
    },
    {
        id: 3,
        src: '/assets/images/bg/bg03.webp',
        subtitle: '"Master the MERN Stack: Build Dynamic Web Applications"',
        title: '"Learn, Build, and Scale with MongoDB, Express.js, React, and Node.js"',
        sm_text: 'Whether you re a beginner or an experienced developer, our resources will help you master MERN and unleash your potential.',
        btn_text: 'Find courses'
    }
];

const HeroSlider = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="hero-banner hero-style-3 bg-image">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={loop}
                pagination={false}
                grabCursor={true}
                draggable={true}
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                className="swiper university-activator"
                speed={1000}
                autoplay={{
                    delay: 5500
                }}
                navigation={{
                    nextEl: ".slide-next",
                    prevEl: ".slide-prev"
                }}
                lazy={{
                    loadPrevNext: false,
                    loadPrevNextAmount: 1
                }}
            >
                {slider_data.map((item) => {
                    const { btn_text, id, sm_text, src, subtitle, title } = item;
                    return (
                        <SwiperSlide key={id}>
                            <img data-transform-origin='center center' src={src} className="swiper-lazy" alt="image" />
                            <div className="thumbnail-bg-content">
                                <div className="container edublink-animated-shape">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="banner-content">
                                                <span className="subtitle" data-sal="slide-up" data-sal-duration="1000">{subtitle}</span>
                                                <h3 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                                                    {title}
                                                </h3>
                                                <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">{sm_text}</p>
                                                <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                                    <Link href="/our-courses">
                                                    <a className="edu-btn btn-secondary">{btn_text} <i className="icon-4"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

                <div className="hero-slider-bg-controls">
                    <div className="swiper-slide-controls slide-prev">
                        <i className="icon-west"></i>
                    </div>
                    <div className="swiper-slide-controls slide-next">
                        <i className="icon-east"></i>
                    </div>
                </div>
            </Swiper>

            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseReverse(25).x,
                        y: mouseReverse(25).y
                    } }
                >
                    <img src="/assets/images/others/shape-10.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                    animate={ {
                        x: mouseDirection(25).x,
                        y: mouseDirection(25).y
                    } }
                >
                    <img src="/assets/images/others/shape-11.png" alt="Shape" />
                </motion.li>
                <li className="shape-3">
                    <img src="/assets/images/others/shape-25.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default HeroSlider;
