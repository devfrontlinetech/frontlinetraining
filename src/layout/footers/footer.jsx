import { useState } from "react";
import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/fnline/Frontline_Logo_Dark.png',
    logoDark: '/assets/images/fnline/Frontline_Logo_White.png',
    desc: 'Unlock your career potential with the best IT training center in Karur, serving the surrounding regions of Namakkal, Erode, and Dindigul. At Frontline Training, our comprehensive IT courses are designed in partnership with Frontline Tech, a leading IT company that offers certified programs in high-demand areas including Ethical Hacking, UI/UX Design, MEAN Full Stack Development, Data Analytics, Data Science, Machine Learning, and Artificial Intelligence. Experience transformative, hands-on learning led by our expert instructors, who provide personalized guidance to ensure your career growth in the ever-evolving tech landscape. Whether you are a beginner looking to start your journey or a seasoned professional aiming to enhance your skills, our courses are tailored to meet your needs.Enroll today at Frontline Training to advance your career in technology and gain industry-relevant skills. Our extensive training programs also include placement opportunities through our job portal, opening the gateway to exciting IT career paths. Explore our dynamic courses that cover crucial topics such as Ethical Hacking, UI/UX Design, MEAN Full Stack Development, Data Science, and Artificial Intelligence. With our commitment to hands-on learning and real-world application, you re equipped to excel in todays competitive job market. Join Frontline Training in Karur, your premier destination for IT training, and elevate your skills and career prospects today! Discover how our industry-focused programs empower individuals and businesses to thrive in the digital age. Don’t miss out on the opportunity to enhance your career—get started with Frontline Training now!',
    add: '29/11 A Old Bypass Road, Near SBI, Karur 1.',
    call: '+91 97896 55455',
    email: 'info@frontlinetraining.in',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Online Platform',
            footer_links: [
                { link: 'web-dev', title: 'Courses' },
                { link: 'team-details', title: 'Instructor' },
                { link: 'contact-us', title: 'Events' },
                { link: 'team-1', title: 'Instructor Profile' },
                { link: 'purchase-guide', title: 'Purchase Guide' }
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: 'contact-me', title: 'Contact Me' },
                { link: 'gallery-grid', title: 'Gallery' },
                { link: 'blog-standard', title: 'News & Articles' },
                { link: 'faq', title: "FAQ's" },
                { link: '', title: 'Sign In/Registration' },
                { link: 'coming-soon', title: 'Coming Soon' }
            ]
        }
    ]
}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg, home_4 }) => {
    const [isExpanded, setIsExpanded] = useState(false); // Step 1: Track if the description is expanded

    const toggleDescription = () => {
        setIsExpanded(!isExpanded); // Step 2: Toggle the description
    };

    const shortDesc = `${desc.substring(0, 230)}...`; // Step 3: Shorten the description
    const displayedDesc = isExpanded ? desc : shortDesc; // Step 4: Determine which description to show

    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'} legacyBehavior>
                                        <a>
                                            {!dark_bg && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                            <img className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                        </a>
                                    </Link>
                                </div>

                                <p className="description">{displayedDesc}
                                {/* Step 5: Add a button to toggle the description */}
                                <button onClick={toggleDescription} className="see-more-btn">
                                    {isExpanded ? 'See Less' : 'See More'}
                                </button> </p>

                                <div className="widget-information">
                                    <ul className="information-list">
                                        <li><span>Add:</span>{add}</li>
                                        <li><span>Call:</span><a href="tel:+91 97896 55455">{call}</a></li>
                                        <li><span>Email:</span><a href="mailto:info@frontlinetraining.in" rel="noreferrer" target="_blank">{email}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`} legacyBehavior><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">Enter your email address to register to our newsletter subscription</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Your email" />
                                        <button className={`edu-btn ${dark_bg && !home_4 ? 'btn-secondary' : ''} btn-medium`} type="button">Subscribe <i className="icon-4"></i></button>
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

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} Frontlinetraining Designed By <a href="https://frontlinetechnologies.org/" rel="noreferrer" target="_blank" aria-label="Frontlinetraining">Frontline</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



