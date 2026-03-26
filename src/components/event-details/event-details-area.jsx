import React from 'react';
import { instructors_data } from '../../data';
import Time from '../../utils/time';
import TeamOne from "../team-member/team-one";

const EventDetailsArea = ({event}) => {
  return (
        <section className="event-details-area edu-section-gap">
            <div className="container">
                <div className="event-details">
                    <div className="main-thumbnail">
                        <img src="/assets/images/event/event-21.jpg" alt="Event" />
                    </div>
                    <div className="row row--30">
                      <div className="col-lg-8">
                            <div className="details-content">
                                <h3>About The Event</h3>

                                <p>
                                    This event is designed for aspiring developers and tech enthusiasts who want to enhance their practical skills and stay updated with the latest industry trends. It brings together professionals, learners, and mentors to share knowledge, experiences, and real-world insights.
                                </p>

                                <p>
                                    Participants will engage in interactive sessions, live demonstrations, and hands-on activities. The event focuses on building practical understanding, networking opportunities, and providing guidance for career growth in the tech industry.
                                </p>

                                <ul>
                                    <li>Live sessions with industry experts and developers</li>
                                    <li>Hands-on workshops and real-time coding demonstrations</li>
                                    <li>Networking opportunities with like-minded learners</li>
                                </ul>

                                <h3>Event Location</h3>

                                <p>
                                    The event will be hosted in a well-equipped venue with modern facilities, ensuring a comfortable and engaging learning environment. Easily accessible by public and private transport, the location is ideal for attendees from across the city.
                                </p>

                                <ul className="event-meta">
                                    <li><i className="icon-40"></i>Chennai, Tamil Nadu, India</li>
                                    <li><i className="icon-71"></i>+91 98765 43210</li>
                                </ul>

                                <div className="gmap_canvas">
                                    <iframe
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=chennai,%20india&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar-3">
                                <div className="edu-course-widget widget-course-summery">
                                    <div className="inner">
                                        <div className="content">
                                            <h4 className="widget-title">Event Info</h4>
                                            <ul className="course-item">
                                                <li>
                                                    <span className="label"><i className="icon-60"></i>Cost:</span>
                                                    <span className="value price">$70.00</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-70"></i>Total Slot:</span>
                                                    <span className="value">30</span>
                                                </li>
                                                <li>
                                                    <span className="label"><i className="icon-68"></i>Booked Slot:</span>
                                                    <span className="value">2</span>
                                                </li>
                                            </ul>
                                            <div className="read-more-btn">
                                                <a href="#" className="edu-btn">Book Now <i className="icon-4"></i></a>
                                            </div>
                                            <div className="countdown">
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number day">{Time('2023-12-5 00:00:00').days}</div>
                                                        <div className="countdown-unit">Days</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number hour">{Time('2023-12-5 00:00:00').hours}</div>
                                                        <div className="countdown-unit">Hrss</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number minute">{Time('2023-12-5 00:00:00').minutes}</div>
                                                        <div className="countdown-unit">Mints</div>
                                                    </div>
                                                </div>
                                                <div className="countdown-section">
                                                    <div>
                                                        <div className="countdown-number second" suppressHydrationWarning>{Time('2023-12-5 00:00:00').seconds}</div>
                                                        <div className="countdown-unit">Sec</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event-speaker">
                    <h3 className="heading-title">Event Speakers</h3>
                    <div className="row g-5">
                        {instructors_data.slice(0,4).map((instructor) => (
                            <div key={instructor.id} className="col-lg-3 col-sm-6 col-12" data-sal-delay={instructor.delay} data-sal="slide-up" data-sal-duration="800">
                                <TeamOne instructor={instructor} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsArea;