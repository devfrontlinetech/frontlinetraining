import React from 'react';
import { Footer, Header } from '../../../layout';
import BreadcrumbTwo from '../../breadcrumb/breadcrumb-2';
import CtaArea from '../../homes/home-online-academy/cta-area';
import TeamArea from './team-area';
import CounterArea from './counter-area';
import AboutUsArea from './about-us-area';
import TestimonialArea from './testimonial-area';
import WhyChose from './why-chose';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true}/>
                <BreadcrumbTwo  subtitle="Marketing" />
                <AboutUsArea/>
                <TestimonialArea/>
                <WhyChose/>
                <CounterArea about_p_3={true} />
                
                <CtaArea/>
               
              
                <TeamArea about_p_3={true}/>
                <Footer/>
            </div>
        </div>
    )
}

export default index;
