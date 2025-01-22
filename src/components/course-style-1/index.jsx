import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseOneArea from  './course-1-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Our Courses" subtitle="Courses" />
                <CourseOneArea/>
                <Footer/>
            </div>
        </div>
    )
}

export default index;
