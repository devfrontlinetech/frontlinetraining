import React from 'react';

const brands = [
    '/assets/images/brand/html.jpg',
    '/assets/images/brand/c++.jpg',
    '/assets/images/brand/javascript.png',
    '/assets/images/brand/julia.jpg',
    '/assets/images/brand/python.jpg',
    '/assets/images/brand/ts.png'
]

const BrandArea = ({about_p_2}) => {
    return (
        <div className={`edu-brand-area ${about_p_2?'brand-area-5':'brand-area-4 gap-lg-bottom-equal'}`}>
            <div className="container">
                <div className="brand-grid-wrap brand-style-2">
                    {brands.map((img, i) => (
                        <div key={i} className="brand-grid">
                            <img src={img} alt="Brand Logo"/>
                        </div>
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default BrandArea;