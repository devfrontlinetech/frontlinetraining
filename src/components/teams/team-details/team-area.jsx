import React from 'react';

const TeamArea = ({ team }) => {
    return (
        <div className="edu-team-details-area section-gap-equal">
            <div className="container">
                <div className="row row--40">
                    <div className="col-lg-4">
                        <div className="team-details-thumb">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-02/${team.img}`} alt="team images" />
                            </div>

                            <ul className="social-share">
                                <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                {team?.social_links?.map((social, i) => (
                                    <li key={i}>
                                        <a href={social.link} target={social.target ? social.target : ''}>
                                            <i className={social.icon}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="team-details-content">
                            <div className="main-info">
                                <span className="subtitle">Instructor</span>
                                <h3 className="title">{team?.name}</h3>
                                <span className="designation">{team?.title}</span>
                                <ul className="team-meta">
                                    <li><i className="icon-25"></i>20 Students</li>
                                    <li>
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(720 Rating)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bio-describe">
                                <h4 className="title">About Me</h4>
                                <p>As the Founder and CEO of Frontline Technologies, I am deeply committed to shaping the future of technology by driving innovation and providing transformative solutions that help businesses succeed in the digital age. With a strong background , I started this journey with a vision to bridge the gap between emerging technologies and real-world applications. My leadership philosophy is rooted in fostering a culture of creativity, collaboration, and continuous learning, ensuring that we stay ahead of technological trends while solving complex challenges.</p>
                                <p>I’m dedicated to fostering a collaborative, forward-thinking environment, where creativity and problem-solving thrive, and I look forward to the continued growth and success of our team and clients alike.</p>
                            </div>

                            <div className="contact-info">
                                <h4 className="title">Contact Me</h4>
                                <ul>
                                    <li><span>Address:</span>29/11 A Old Bypass Road, Near SBI, Karur 1,</li>
                                    <li><span>Email:</span><a href="mailto:info@frontlinetraining.n" target="_blank" rel="noreferrer">info@frontlinetraining.in</a></li>
                                    <li><span>Phone:</span><a href="tel:+91 97896 55455">+91 97896 55455</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamArea;