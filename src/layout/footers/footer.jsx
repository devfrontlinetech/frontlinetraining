import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/fnline/Frontline_Logo_Dark.png',
    logoDark: '/assets/images/fnline/Frontline_Logo_White.png',
    desc: 'Frontline Tech is a global IT consulting services and Tech Engineering provider. Our clientele comes from a broad array of industries from SME to large corporations. IT experience and using cutting edge technology.',
    add: '29/11 A Old Bypass Road, Near SBI, Karur 1.',
    call: '+91 97896 55455',
    email: 'info@frontlinetraining.in',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Online Platform',
            footer_links: [
                //{ link: 'about-1', title: 'About' },
                { link: 'our-courses', title: 'Courses' },
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
                { link: 'contact-us', title: 'Contact' },
                { link: 'gallery-grid', title: 'Gallery' },
                { link: 'blog-standard', title: 'News & Articles' },
                // { link: 'faq', title: "FAQ's" },
                { link: '', title: 'Sign In/Registration' },
                { link: 'coming-soon', title: 'Coming Soon' }
            ]
        }
    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg,home_4 }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a  aria-label="Frontlinetraining">
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                                <img className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                            </>}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a  aria-label="Frontlinetraining">
                                            {dark_bg && <img className="logo-light" src={home_4?'/assets/images/fnline/Frontline_Logo_White.png' :'/assets/images/fnline/Frontline_Logo_Dark.png'} alt="Corporate Logo" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description">{desc}</p>
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
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}><a>{l.title}</a></Link></li>)}
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
                                        <button className={`edu-btn ${dark_bg && !home_4?'btn-secondary':''} btn-medium`} type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial/>
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
    )
}

export default Footer;
