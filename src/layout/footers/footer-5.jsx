import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import FooterSocial from "./component/footer-social";

/* Content */
const footer_contents = {
  desc: `Unlock your career potential with the best IT training center in Karur. Learn industry-relevant skills with expert guidance and hands-on experience.`,
  add: "29/11 A Old Bypass Road, Near SBI, Karur 1.",
  call: "+91 97896 55455",
  email: "info@frontlinetraining.in",
  widgets: [
    {
      widget_title: "Online Platform",
      footer_links: [
        { link: "courses", title: "Courses" },
        { link: "instructors", title: "Instructor" },
        { link: "events", title: "Events" },
        { link: "profile", title: "Instructor Profile" },
      ],
    },
    {
      widget_title: "Quick Links",
      footer_links: [
        { link: "contact", title: "Contact" },
        { link: "gallery", title: "Gallery" },
        { link: "blog", title: "News & Articles" },
        { link: "faq", title: "FAQ's" },
      ],
    },
  ],
};

const FooterFive = () => {
  const { desc, add, call, email, widgets } = footer_contents;
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDesc = `${desc.substring(0, 120)}...`;
  const displayedDesc = isExpanded ? desc : shortDesc;

  return (
    <footer className="ft5-container">
           <div className="ft5-top container">
        
                <div className="ft5-col ft5-about">
                     <Link href="/">
                           <Image src="/assets/images/free-course/logo.png"  alt="logo" width={150} height={50} className="ft5-logo" />
                     </Link>

                     <p className="ft5-desc"> {displayedDesc} {desc.length > 120 && (
                        <span className="ft5-toggle" onClick={() => setIsExpanded(!isExpanded)} >
                              {isExpanded ? " See Less" : " See More"}
                        </span>
                       )}
                     </p>

                 <div className="ft5-contact">
                      <div className="ft5-contact-item">
                            <FaMapMarkerAlt className="ft5-icon" />
                            <span>{add}</span>
                      </div>

                <div className="ft5-contact-item">
                        <FaPhoneAlt className="ft5-icon" />
                        <a href={`tel:${call}`}>{call}</a>
                </div>

                <div className="ft5-contact-item">
                      <FaEnvelope className="ft5-icon" />
                      <a href={`mailto:${email}`}>{email}</a>
                </div>
          </div>
        </div>

        
        {widgets.map((w, i) => (
          <div key={i} className="ft5-col">
            <h4>{w.widget_title}</h4>
            <ul>
              {w.footer_links.map((l, index) => (
                <li key={index}>
                  <Link href={`/${l.link}`}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="ft5-col ft5-newsletter">
          <h4>Contacts</h4>

          <div className="ft5-inner">
            <p className="ft5-desc">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <div className="ft5-input-group">
              <input type="email" placeholder="Your email" />
              <button type="button">
                Subscribe <i className="icon-4"></i>
              </button>
            </div>

            <ul className="ft5-social">
              <FooterSocial />
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="ft5-bottom">
        <p>
          Copyright {new Date().getFullYear()} Frontlinetraining. Designed By{" "}
          <a
            href="https://frontlinetechnologies.org/"
            target="_blank"
            rel="noreferrer"
          >
            Frontline
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterFive;
