import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import BlogCommentForm from '../forms/blog-comment-form';
import CommentArea from './comment-area';

const BlogDetailsArea = ({blog}) => {
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Developer</span>
                                <h3 className="title">{blog?.title}</h3>
                                <ul className="blog-meta">
                                    <li><i className="icon-27"></i>{blog?.date}</li>
                                    <li><i className="icon-28"></i>Com {blog?.comment}</li>
                                </ul>
                                <div className="thumbnail">
                                    <img src="/assets/images/blog/blog-large-1.jpg" alt="Blog Image" />
                                </div>
                            </div>

                            <p>Education shapes our lives by empowering us with knowledge and skills, paving the way for personal growth and societal progress. Through education, we have the power to change the future, fostering innovation, equality, and a better world for all. </p>

                            <p>In this way, education has the transformative power to change the future for the better, creating a more informed, compassionate, and sustainable world for generations to come.</p>
                            <ul>
                                <li>Empower Through Knowledge, Shape Tomorrow’s World.</li>
                                <li>Education is the Key to a Future Without Limits.</li>
                                <li>Learn Today, Lead Tomorrow.</li>
                            </ul>

{/*                             <blockquote>
                                <p>Lorem ipsum dolor amet con sectur elitadicing elit sed do usmod tempor uincididunt enim minim veniam nostrud.</p>
                                <h5 className="author">Simon Baker</h5>
                            </blockquote> */}

                            <h3 className="title">Transforming Businesses with Technology</h3>
                            <p> "Digitally Transforming Your Business for Success" Description: Focus on how your IT solutions help businesses enhance their operations, improve efficiency, and accelerate growth using the latest tech tools and platforms.</p>

                            <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/moti-1.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/moti-2.jpg" alt="Features Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p></p>

                            <p>Our programs are designed to ignite your passion and empower you to make an impact.</p>

                            <h3 className="title">Dream Big, Learn Bigger</h3>
                            <p>In the world of IT, there are no limits to what you can achieve. Dream big, learn bigger, and let your journey towards greatness begin with us.</p>

                            <ul>
                                <li>Focus on Soft Skills</li>
                                <li>Never Stop Learning</li>
                                <li>Work on Real Projects</li>
                                
                            </ul>

                            <div className="blog-share-area">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="blog-tags">
                                            <h6 className="title">Tags:</h6>
                                            <div className="tag-list">
                                                <a href="contact-us">Language</a>
                                                <a href="contact-us">eLearn</a>
                                                <a href="contact-us">Tips</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="blog-share">
                                            <h6 className="title">Share on:</h6>
                                            <ul className="social-share icon-transparent">
                                                <li>
                                                    <a href=" https://www.facebook.com/frontlinetechin/"><i className="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/FrontlineTechin"><i className="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/frontlinetechnologies_/"><i className="icon-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

{/*                         <div className="blog-author">
                            <div className="thumbnail">
                                <img src="/assets/images/blog/author-01.jpg" alt="Author Images" />
                            </div>
                            <div className="author-content">
                                <h5 className="title">Edward Norton</h5>
                                <p>Enim ad minim veniam quis nostrud exercitation lamco laboris nisi ex commodo consequat aute irure.</p>
                                <ul className="social-share icon-transparent">
                                    <li>
                                        <a href="#"><i className="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="blog-pagination">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="blog-pagination-list prev-post">
                                        <a href="#">
                                            <i className="icon-west"></i>
                                            <span>Instructional Design and Adult Learners</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="blog-pagination-list next-post">
                                        <a href="#">
                                            <span>Qualification for Students Satisfaction Rate</span>
                                            <i className="icon-east"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/*  Start Comment Area  */}
                        <CommentArea />
                        {/*  End Comment Area  */}
                        <div className="comment-form-area">
                            <h3 className="heading-title">Leave Your Comment Here</h3>
                            {/* form start */}
                            <BlogCommentForm />
                            {/* form end */}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* sidebar start */}
                        <BlogSidebar />
                        {/* sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsArea;
