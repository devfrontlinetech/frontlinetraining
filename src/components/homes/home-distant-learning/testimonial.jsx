import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import Link from 'next/link';

const testimonial_contents = {
    pre_title: 'Testimonials',
    title: 'What Our Students Have To Say',
    text: 'The art of “Communicating with Computers” is called coding, It allows us to be able to communicate with computers, and make them do what we want them to. One of the most exciting aspects of learning to code is the potential to bring your ideas to life and that’s how popular games, software, apps, web apps, and various other algorithms are built.',
    testimonial_data: [
        {
            img: '/assets/images/testimonial/test-01.jpg',
            desc: 'I want to encourage all of you, whatever you just starting or already on your coding journey, to embrace the process. Don t be afraid to make mistakes; they are often the best teachers.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Raj',
            title: 'Student'
        },
        {
            img: '/assets/images/testimonial/test-02.jpg',
            desc: 'I want to remind you that as designers. Let’s design with intention, inspire others, and make the internet a more beautiful. Embrace your journey : the best is yet to come.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Megan',
            title: 'Designer'
        },
        {
            img: '/assets/images/testimonial/test-03.jpg',
            desc: 'It’s a journey filled with endless possibilities. Embrace every challenge, celebrate your successes, and keep pushing the limits of what you can achieve.',
            ratings: [1, 2, 3, 4, 5],
            name: 'Krish',
            title: 'Developer'
        },
        {
            img: '/assets/images/testimonial/test-04.jpg',
            desc: 'never forget why you started. The world is waiting for your voice. Don’t hold back. Step into your power, and let your creativity shine!',
            ratings: [1, 2, 3, 4, 5],
            name: 'Rishi',
            title: 'Content Creator'
        }
    ]
}

const { pre_title, testimonial_data, text, title } = testimonial_contents;

const Testimonial = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    return (
        <div className="testimonial-area-5 gap-lg-bottom-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title">{title}</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>{text}</p>
                                <Link href="/about-1">
                                    <a className="edu-btn btn-large">View All<i className="icon-4"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            loop={loop}
                            speed={500}
                            slidesPerView={1}
                            centeredSlides={true}
                            effect="coverflow"
                            grabCursor={true}
                            modules={[Autoplay, EffectCoverflow, Pagination]}
                            className="swiper-testimonial-slider-wrapper swiper testimonial-coverflow"
                            autoplay={{
                                delay: 2500
                            }}
                            breakpoints={{
                                575: {
                                    slidesPerView: 2
                                }
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                                depth: 180,
                                stretch: 80
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            }}
                        >
                            {testimonial_data.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-grid">
                                        <div className="thumbnail">
                                            <img src={item.img} alt="Testimonial" />
                                            <span className="qoute-icon"><i className="icon-26"></i></span>
                                        </div>
                                        <div className="content">
                                            <p>{item.desc}</p>
                                            <div className="rating-icon">
                                                {item.ratings.map((r, i) => <i key={i} className="icon-23"></i>)}
                                            </div>
                                            <h5 className="title">{item.name}</h5>
                                            <span className="subtitle">{item.title}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
