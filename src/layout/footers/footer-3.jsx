import Link from 'next/link';
import React from 'react';
import FooterSocial from './component/footer-social';

const widgets = [
    {
        col: '3',
        class: 'explore-widget',
        widget_title: 'Online Platform',
        footer_links: [
            { link: 'about-1', title: 'About' },
            { link: 'course-style-1', title: 'Courses' },
            { link: 'team-1', title: 'Instructor' },
            { link: 'event-grid', title: 'Events' },
            { link: 'team-details', title: 'Instructor Profile' },
            { link: 'purchase-guide', title: 'Purchase Guide' }
        ]
    },
    {
        col: '2',
        class: 'quick-link-widget',
        widget_title: 'Links',
        footer_links: [
            { link: 'contact-us', title: 'Contact Us' },
            { link: 'gallery-grid', title: 'Gallery' },
            { link: 'blog-standard', title: 'News & Articles' },
            { link: 'faq', title: "FAQ's" },
            { link: 'sign-in', title: 'Sign In/Registration' },
            { link: 'coming-soon', title: 'Coming Soon' }
        ]
    }
]

const FooterThree = () => {
    return (
        <footer className="edu-footer footer-kindergarten footer-style-6">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="edu-footer-widget"> 
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img className="logo-dark" src="/assets/images/fnline/Frontline_Logo_White.png" alt="Corporate Logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p className="description">Frontline Tech is a global IT consulting services and Tech Engineering provider. Our clientele comes from a broad array of industries from SME to large corporations. IT experience and using cutting edge technology.</p>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => 
                                                <li key={i}>
                                                    <Link href={`/${l.link}`}><a>{l.title}</a></Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="edu-footer-widget">
                            <h6 className="widget-title">Contacts</h6>
                                <div className="inner">
                                    <p className="description">We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help. Get in touch with us.</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Add:</span>29 / 11 A Old Bypass Road, Near SBI , Karur 1.</li>
                                            <li><span>Call:</span><a href="tel:+91 97896 55455">+91 97896 55455</a></li>
                                            <li><span>Email:</span><a href="mailto:info@frontlinetraining.in" target="_blank" rel="noreferrer">info@frontlinetraining.in</a></li>
                                        </ul>
                                    </div>

                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>
                                    Copyright {new Date().toDateString()} 
                                    Frontlinetraining Designed By <a href="https://frontlinetechnologies.org/" target="_blank" rel="noreferrer" aria-label="Frontlinetraining">Frontline</a>. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterThree;
