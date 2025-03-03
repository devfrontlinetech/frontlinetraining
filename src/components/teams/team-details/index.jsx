import React from 'react';
import { Footer, Header } from '../../../layout';
import BreadcrumbThree from '../../breadcrumb/breadcrumb-3';
import CourseArea from './course-area';
import TeamArea from './team-area';

const index = ({team}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Instructor Details" subtitle="Instructor Details" />
                <TeamArea team={team} />
                <CourseArea name={team.name}/>
{/*                 <Footer style_2={'footer-dark bg-image footer-style-2'} /> */}
                <Footer />
            </div>
        </div>
    )
}

export default index;
