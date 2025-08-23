import Link from 'next/link';
import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/frontlinetechin/', target: '_blank', icon: 'icon-facebook' },
    { link: 'https://twitter.com/FrontlineTechin', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/company/frontline-technologies', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/frontlinetechnologies_', target: '_blank', icon: 'icon-instagram' }
]

const HeaderTopRight = () => {
    return (
        <ul className="header-info">

            
            <li> <Link href="/codeintro">Code Runner</Link> </li>

                <li><a href="tel:+91 97896 55455"><i className="icon-phone"></i>Call: +91 97896 55455</a></li>
                {/* <li><a href="mailto:info@frontlinetraining.in" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email:info@frontlinetraining.in</a></li> */}
          {/*  <li><Link href="/sign-in"><a>Login</a></Link></li>
               <li><Link href="/sign-in"><a>Register</a></Link></li>  */}
           
            <li className="social-icon">
                {social_share.map((social, i) => (
                    <a key={i} href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                        <i className={social.icon}></i>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default HeaderTopRight;