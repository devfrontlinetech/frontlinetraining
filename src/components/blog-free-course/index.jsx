import React from 'react';
import { FooterFive, HeaderFour } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import BlogSection from './blog-section';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderFour no_top_bar={true} />
                <BreadcrumbThree title="Blog Standard" subtitle="Blog 1" />
                <BlogSection />
                <FooterFive />
            </div>
        </div>
    )
}

export default index;