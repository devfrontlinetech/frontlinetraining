import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import VideoArea from '../../homes/home-distant-learning/video-area';
import AdBanner from '../../homes/home-university/ad-banner';
import Testimonial from '../../homes/home-university/testimonial';
import TeamArea from './team-area';
import BrandArea from '../about-1/brand-area';
import CounterArea from './counter-area';
import WhyChose from './why-chose';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true}/>
                <Breadcrumb title={'Ethical Hacking (IT)'} current_page="" />
                <WhyChose/>
                {/*<VideoArea about_p_2={true}/>*/}
                <BrandArea about_p_2={true}/>
                <Testimonial about_p_2={true}/>
                <CounterArea/>
                <TeamArea about_p_2={true} />
                <AdBanner/>
                <Footer/>
            </div>
        </div>
    )
}

export default index;
