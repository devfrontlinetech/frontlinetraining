import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

const testimonial_data = [
    {
        img: '/assets/images/testimonial/test-01.jpg',
        desc: 'The software company in Karur. Cutting-edge web design and impressive performance of their hosting set it apart.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
          
        </>,
        name: 'Ganam Athi',
        title: 'Client'
    },
    {
        img: '/assets/images/testimonial/test-02.jpg',
        desc: 'Impressive CMS development . I got to know about their initiative to make available content management system.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            
        </>,
        name: 'Chitra',
        title: 'Designer'
    },
    {
        img: '/assets/images/testimonial/test-03.jpg',
        desc: 'Frontline Tech has earned our trust as a dependable long-term IT partner. Reliable and mutually progressive.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            
        </>,
        name: 'Sneha',
        title: 'Developer'
    },
    {
        img: '/assets/images/testimonial/test-04.jpg',
        desc: 'Awesome software development company.They have created many javascript libraries that I using  my projects.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Brijesh Mohanraj',
        title: 'Developer'
    }
]

export default function TestimonialArea() {
    const [loop,setLoop] = useState(false);
    useEffect(() => setLoop(true) ,[])
    return (
        <div className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title">What Our Clients Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>The art of “Communicating with Computers” is called coding, It allows us to be able to communicate with computers, and make them do what we want them to. One of the most exciting aspects of learning to code is the potential to bring your ideas to life and that’s how popular games, software, apps, web apps, and various other algorithms are built.</p>
                                <a href="#" className="edu-btn btn-large">View All<i className="icon-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={loop}
                            className="home-one-testimonial-activator swiper "
                            modules={[Autoplay]}
                            pagination={false}
                            grabCursor={true}
                            speed={1500}
                            autoplay={{
                                delay: 3500
                            }}
                            breakpoints={{
                                577: {
                                slidesPerView: 2
                                }
                            }}
                        >
                            {testimonial_data.map((testi, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-grid">
                                        <div className="thumbnail">
                                            <img src={testi.img} alt="Testimonial" />
                                            <span className="qoute-icon"><i className="icon-26"></i></span>
                                        </div>
                                        <div className="content">
                                            <p>{testi.desc}</p>
                                            <div className="rating-icon">
                                                {testi.ratings}
                                            </div>
                                            <h5 className="title">{testi.name}</h5>
                                            <span className="subtitle">{testi.title}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
