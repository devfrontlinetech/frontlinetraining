import React from 'react';
import { FooterFive, HeaderFour } from '../../layout';
import CertificateLayoutArea from './certificate-layout';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderFour no_top_bar={true} />
                <CertificateLayoutArea />
                <FooterFive  />
            </div>
        </div>
    )
}

export default index;