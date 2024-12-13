import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';
import VideoModal from '../../common/popup-modal/video-modal';
import useModal from '../../../hooks/use-modal';

const contents = {
    pre_title: 'Testimonials',
    title: <>What Our Clients <br /> Have To Say</>,
    testimonials: [
        {
            ratings: [1, 2, 3, 4, 5],
            desc: '“I have been coming here to do intership in karur, Their apps are all super and work atmosphere is great, They value even inters contributions. Great, I plan to join here.”.',
            author: '/assets/images/testimonial/test-01.jpg',
            name: 'Deepan Siva',
            title: 'Student'
        },
        {
            ratings: [1, 2, 3],
            desc: '“ Excellent website design and software deveopment for business ideas.”.',
            author: '/assets/images/testimonial/test-02.jpg',
            name: 'Niranjan',
            title: 'Developer'
        },
        {
            ratings: [1, 2, 3, 4],
            desc: '“Their SEO optimization strategies helped my website rank higher on search engines, Resulting in more traffic and conversion. Much recommended. ”.',
            author: '/assets/images/testimonial/test-03.jpg',
            name: 'Reena Williams',
            title: 'Designer'
        }
    ],
    video_title: 'Take a Video Tour to Learn Intro Digital Marketing',
    video_id: 'PICj5tr9hcc'
}

const { pre_title, testimonials, title,video_id,video_title } = contents;

const TestimonialArea = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), []);
    const { isVideoOpen, setIsVideoOpen } = useModal();
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <>
            <section className="testimonial-area-6 gap-bottom-equal">
                <div className="container edublink-animated-shape">
                    <div className="row row--40">
                        <div className="col-lg-6">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title">What Our Clients Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>

                            <Swiper
                                className="testimonial-activation-5 swiper "
                                slidesPerView={1}
                                spaceBetween={0}
                                modules={[Pagination, Autoplay]}
                                loop={loop}
                                grabCursor={true}
                                speed={1000}
                                autoplay={{
                                    delay: 3000
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true
                                }}
                            >
                                {testimonials.map((item, i) => {
                                    const { author, desc, name, ratings, title } = item;
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="testimonial-slide testimonial-style-3">
                                                <div className="content">
                                                    <div className="rating-icon">
                                                        {ratings.map(r => <i key={r} className="icon-23"></i>)}
                                                    </div>
                                                    <p>{desc}</p>
                                                    <div className="author-info">
                                                        <div className="thumb">
                                                            <img src={author} alt="Testimonial" />
                                                        </div>
                                                        <div className="info">
                                                            <h5 className="title">{name}</h5>
                                                            <span className="subtitle">{title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>

                        <div className="col-lg-6">
                            <div className="video-gallery video-gallery-5" data-sal-delay="150" data-sal="slide-left" data-sal-duration="800">
                                <div className="thumbnail">
                                    <img src="/assets/images/others/vid3.webp" alt="Thumb" />
                                    <button onClick={() => setIsVideoOpen(true)} className="video-play-btn video-popup-activation">
                                        <i className="icon-18"></i>
                                    </button>
                                </div>
                                <div className="content">
                                    <h4 className="title">{video_title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <motion.li className="shape-2 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="1000"
                            animate={ {
                                x: mouseReverse(30).x,
                                y: mouseReverse(30).y
                            } }
                        >
                            <img src="/assets/images/about/shape-25.png" alt="Shape" />
                        </motion.li>
                        <motion.li className="shape-3 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="1000"
                            animate={ {
                                x: mouseDirection(40).x,
                                y: mouseDirection(40).y
                            } }
                        >
                            <span></span>
                        </motion.li>
                    </ul>
                </div>
                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                </ul>
            </section>

            {/* video modal start */}
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
            {/* video modal end */}
        </>
    )
}

export default TestimonialArea;