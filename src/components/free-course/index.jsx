import React from 'react';
import { FooterFive, HeaderFour } from '../../layout';
import Courses from './courses';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderFour no_top_bar={true} />
                <Courses />
                <FooterFive  />
            </div>
        </div>
    )
}

export default index;