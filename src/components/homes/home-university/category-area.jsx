import React from 'react';
import { BookLibrary, ScholarshipFacility, SkilledLecturers } from '../../../svg';

const categories = [
    {
        icon: <ScholarshipFacility />,
        title: 'Scholarship Facility',
        text: 'We offer scholarship opportunities to support students in achieving their educational goals without financial barriers.',
        color: 'color-primary-style'
    },
    {
        icon: <SkilledLecturers />,
        title: 'Skilled Lecturers',
        text: 'Learn from experienced and qualified instructors who provide practical knowledge and real-world insights.',
        color: 'color-secondary-style'
    },
    {
        icon: <BookLibrary />,
        title: 'Book Library & Store',
        text: 'Access a wide range of learning resources, books, and study materials to enhance your knowledge and skills.',
        color: 'color-extra02-style'
    }
];
const CategoryArea = () => {
    return (
        <div className="features-area-3">
            <div className="container">
                <div className="features-grid-wrap">
                    {categories.map((c,i) => (
                        <div key={i} className={`features-box features-style-3 ${c.color} edublink-svg-animate`}>
                            <div className="icon">
                                {c.icon}
                            </div>
                            <div className="content">
                                <h4 className="title">{c.title}</h4>
                                <p>{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;