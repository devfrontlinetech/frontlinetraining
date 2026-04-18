import React from 'react';
import { FooterFive, HeaderFour } from '../../layout';
// import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CoursePage from './course-page.jsx';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderFour no_top_bar={true} />
                {/* <BreadcrumbThree title="Full Stack " subtitle="Course" /> */}
                <CoursePage/>
                <FooterFive />
            </div>
        </div>
    )
}

export default index;