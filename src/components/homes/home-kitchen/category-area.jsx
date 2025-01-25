import React from 'react';
import { CertificateTwo, HybridDistanceProgramsTwo, SkilledLecturersTwo, UserTwo } from '../../../svg';

const CategoryArea = () => {
    return (
        <div className="features-area-1 gap-top-equal">
            <div className="container">
                <div className="row g-5">
                    <FeatureBox delay={'50'} color={'color-primary-style'} icon={<SkilledLecturersTwo />}
                    title={<><span>Skilled </span>Lecturers</>} text={'Experienced and qualified instructors are available to guide learners, ensuring high-quality education and expertise in various subjects.'} />

                    <FeatureBox delay={'100'} color={'color-secondary-style'} icon={<HybridDistanceProgramsTwo />}
                    title={<><span>Distance</span> Programs</>} text={'Flexible learning options that allow students to study from anywhere, making education more accessible for people with varying schedules or locations.'} />

                    <FeatureBox delay={'150'} color={'color-extra08-style'} icon={<CertificateTwo />}
                    title={<><span>Online</span>Certifications</>} text={'A chance for learners to earn certifications in their chosen fields, providing recognized qualifications that can enhance careers and job prospects.'} />
                    
                    <FeatureBox delay={'150'} color={'color-extra05-style'} icon={<UserTwo />}
                    title={<><span>102</span>Members</>} text={'A growing community of 102 members, fostering a collaborative and supportive learning environment where students can interact, share experiences, and network.'} />
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;

const FeatureBox = ({ delay, icon, color, title, text }) => {
    return (
        <div className="col-lg-3" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
            <div className={`features-box ${color} edublink-svg-animate`}>
                <div className="icon">
                    {icon}
                </div>
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
