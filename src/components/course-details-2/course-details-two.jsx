import React from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import SingleComment from '../course-details/single-comment';
import SingleProgressbar from '../course-details/single-progressbar';
import SingleAccordion from './single-accordion';

const CourseDetailsTwo = ({ course }) => {
  const { course_desc, course_desc_2, learn_list, course_desc_3, curriculum_desc, course_lessons, instructor_img, instructor_title, instructor_desc, social_links, reviews, instructor, rating, rating_count } = course || {};
    return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="course-details-content course-details-2">
                            {/* <div className="course-overview">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">About This Course</h3>
                                * <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc}</p>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc_2}</p> *
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"> one of the most important and dynamic fields in the modern business world. It covers a wide range of strategies and techniques aimed at promoting products, services, or brands using various digital channels. Here’s an overview of what a Digital Marketing Course might cover:</p>
                                <div className="border-box">
                                    <h5 className="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">What You’ll Learn?</h5>
                                    <div className="row g-5">
                                        <div className="col-lg-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                            <ul>
                                                <li>Understand what digital marketing is and why it's essential in today's business world.</li>
                                                <li>Learn about various channels such as SEO, social media, email marketing, content marketing, and more.</li>
                                              </ul>
                                        </div>

                                        <div className="col-lg-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                            <ul>
                                                <li>Learn how to create a comprehensive digital marketing strategy aligned with business goals.</li>
                                                <li>Learn how to engage with followers, manage comments, and create a loyal online community.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Requirements</h3>
                                <ul className="mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <li> Ability to identify the right keywords for optimization.</li>
                                    <li>Ability to interact with followers, answer questions, and build a brand community.</li>
                                    <li>Ability to distribute content on the right channels (website, social media, email, etc.).</li>
                                    <li>A basic understanding of what digital marketing is and why it’s important for businesses is fundamental.</li>
                                    <li> Familiarity with platforms like Google Analytics is key to measuring website traffic, user behavior, and campaign performance.</li>
                                </ul>

                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Target Audience</h3>
                                <ul className="mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <li>Introduction to Targeting</li>
                                    <li>Analyze case studies of successful social media campaigns.Group discussions on audience segmentation.</li>
                                    
                                </ul>
                            </div> */}

                            <div className="course-curriculam mb--90">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Digital Marketing (80 hours)</h3>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Understanding the scope and importance of digital marketing in today’s world.</p>
                                <div className="accordion edu-accordion" id="accordionExample" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">

                                    <SingleAccordion show={true} id="1" title="Introduction to Digital Marketing " desc={[
                                        { title: 'Overview of Major Platforms ', icon: 'icon-68' },
                                        { title: 'Digital Marketing Channels (Facebook, Instagram, Twitter, LinkedIn, Share Chat, etc)', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                     <SingleAccordion  id="2" title="Content Marketing ( Content Creation and Design ) " desc={[
                                        { title: 'Creation of Ad posters using AI', icon:'icon-68'},
                                        { title: 'Typography, Color Theory, and Branding', icon:'icon-68'},
                                        { title: 'Develop skills in visual content creation.', icon:'icon-68'},
                                        { title: 'Video Production and Editing for Social Media', icon:'icon-68'},
                                        { title: 'Tools for Social Media Design (Canva, Adobe, etc.)', icon:'icon-68'},
                                        { title: 'Understand the principles of design for social media.', icon:'icon-68'},
                                        
                                        // { title: 'Course Overview', badge_list: true, question: 0, minutes: 10 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="3" title="Introduction to Social Media Analytics " desc={[
                                        // { title: 'Introduction', icon: 'icon-68' },
                                        // { title: 'Course Overview', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 2, minutes: 12 },
                                        { title: 'Tools for Measurement (Google Analytics, Facebook Insights, etc.)', icon: 'icon-68' },
                                        { title: 'Interpreting Data and Reporting', icon: 'icon-68' },
                                        { title: 'A/B Testing and Optimization', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="4" title="The Rise of Short-Form Video Content" desc={[
                                        // { title: 'Introduction', icon: 'icon-68' },
                                        // { title: 'Course Overview', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 4, minutes: 15 },
                                        { title: 'AI and Automation in Social Media Marketing', icon: 'icon-68' },
                                        { title: 'Ethical Considerations in Social Media Marketing', icon: 'icon-68' },
                                        { title: 'User-Generated Content and Community ManagementL', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="5" title="Analytics and Reporting" desc={[
                                        { title: 'Introduction to Analytics', icon: 'icon-68' },
                                        { title: 'Data Interpretation and Reporting', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 6, minutes: 18 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                     <SingleAccordion id="6" title="Social Media Marketing" desc={[
                                        { title: 'Campaign Creation and Scheduling', icon: 'icon-68' },
                                        { title: 'Multi-Platform Strategy Development', icon: 'icon-68' },
                                        { title: 'Budgeting for Social Media Campaigns', icon: 'icon-68' },
                                        { title: 'Peer reviews of campaign plans and strategies.', icon: 'icon-68' },
                                        { title: 'Create a campaign plan, including timeline, budget, and metrics.', icon: 'icon-68' },
                                        // { title: '', icon: 'icon-68' },
                                        // { title: '', icon: 'icon-68' },
                                        // { title: '', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 6, minutes: 18 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                       <SingleAccordion id="7" title="The Rise of Short-Form Video Content" desc={[
                                        { title: 'Building an Email List', icon: 'icon-68' },
                                        { title: 'Analytics and Reporting ', icon: 'icon-68' },
                                        { title: 'Introduction to Analytics', icon: 'icon-68' },
                                        { title: 'Creating Effective Email Campaigns', icon: 'icon-68' },
                                        
                                        { title: 'AI and Automation in Social Media Marketing', icon: 'icon-68' },
                                        { title: 'Ethical Considerations in Social Media Marketing', icon: 'icon-68' },
                                        { title: 'User-Generated Content and Community Management', icon: 'icon-68' },
                                        // { title: '', icon: 'icon-68' },
                                        ]} />
                                        
                                       <SingleAccordion id="8" title="Introduction to Social Media Analytics " desc={[
                                        { title: 'A/B Testing and Optimization', icon: 'icon-68' },
                                        { title: 'Interpreting Data and Reporting', icon: 'icon-68' },
                                        { title: 'Tools for Measurement (Google Analytics, Facebook Insights, etc.)', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 6, minutes: 18 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                       <SingleAccordion id="9" title="Integrating Digital Marketing Channels " desc={[
                                        { title: 'Omnichannel Marketing Approach', icon: 'icon-68' },
                                        { title: 'Digital Marketing on Auto Pilot and Automation in Digital Marketing and Trends', icon: 'icon-68' },
                                        // { title: '', icon: 'icon-68' },
                                        // { title: 'Course Overview', badge_list: true, question: 6, minutes: 18 },
                                        // { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        // { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        // { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                </div>
                            </div>

                            <div className="course-instructor-wrap mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Your Instructors</h3>
                                <div className="course-instructor">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/team-02/${instructor_img}`} alt="team images" />
                                    </div>

                                    <div className="author-content">
                                        <h6 className="title">{instructor}</h6>
                                        <span className="subtitle">{instructor_title}</span>
                                        <p>{instructor_desc}</p>
                                        <ul className="social-share">
                                            {social_links?.map((social, i) => (
                                                <li key={i}>
                                                    <a href={social.link} target={social.target ? social.target : ''}>
                                                        <i className={social.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="course-review" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Student Feedback</h3>
                                <p>{rating} average rating based on {rating_count} rating</p>
                                <div className="row g-0 align-items-center">
                                    <div className="col-sm-4">
                                        <div className="rating-box">
                                            <div className="rating-number">{rating}</div>
                                            <div className="rating">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                            </div>
                                            <span>({rating_count} Review)</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="review-wrapper">
                                            <SingleProgressbar value={'100'} rating_value={rating_count} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-area">
                                    <h3 className="heading-title">Reviews</h3>
                                    <div className="comment-list-wrapper">
                                        {reviews?.map((review, i) => (
                                            <SingleComment key={i} review={review} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <CourseDetailsSidebar course={course} details_2={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsTwo;
