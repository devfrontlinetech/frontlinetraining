import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../data';

const latest_blog = blog_data.slice(0, 3);

const BlogSidebar = () => {
    return (
        <div className="edu-blog-sidebar">
            <div className="edu-blog-widget widget-search">
                <div className="inner">
                    <h4 className="widget-title">Search</h4>
                    <div className="content">
                        <form className="blog-search" onSubmit={e => e.preventDefault()}>
                            <button className="search-button"><i className="icon-2"></i></button>
                            <input type="text" placeholder="Search" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-latest-post">
                <div className="inner">
                    <h4 className="widget-title">Latest Post</h4>
                    <div className="content latest-post-list">
                        {latest_blog.map((blog) => (
                            <div key={blog.id} className="latest-post">
                                <div className="thumbnail">
                                    <Link href={`/blog-details/${blog.id}`}>
                                        <a>
                                            <img src={blog.img} alt="Blog Images" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h6 className="title">
                                        <Link href={`/blog-details/${blog.id}`}>
                                            <a>{blog.title.substring(0, 25)}...</a>
                                        </Link>
                                    </h6>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>{blog.date}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Categories</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a href="digitalmarketing">Digital Marketing<span>(3)</span></a></li>
                            <li><a href="software-testing">Software Testing <span>(7)</span></a></li>
                            <li><a href="ui-ux">UI / UX<span>(2)</span></a></li>
                            <li><a href="python-data">Python / Data Science<span>(1)</span></a></li>
                            <li><a href="ai-ml">AI / ML <span>(3)</span></a></li>
                            <li><a href="ethical-hacking">Ethical Hacking<span>(9)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-action">
                <div className="inner">
                    <h4 className="title">Get Online Courses From <span>FrontLine</span></h4>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>Success is just one click away</p>
                    <a href="contact-me" className="edu-btn btn-medium">Start Now <i className="icon-4"></i></a>
                </div>
            </div>

            <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Archives</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a >2019 Nevember <span>(3)</span></a></li>
                            <li><a >2020 December <span>(7)</span></a></li>
                            <li><a >2021 / 2022 January<span>(2)</span></a></li>
                            <li><a >2023 February <span>(1)</span></a></li>
                            <li><a >2024 March <span>(3)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-tags">
                <div className="inner">
                    <h4 className="widget-title">Tags</h4>
                    <div className="content">
                        <div className="tag-list">
                            <a href="contact-us">Language</a>
                            <a href="contact-us">eLearn</a>
                            <a href="contact-us">Tips</a>
                            <a href="contact-us">Course</a>
                            <a href="contact-us">Motivation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;
