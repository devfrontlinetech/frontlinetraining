import React from 'react';

const images = [
    '/assets/images/brand/png1.png',
    '/assets/images/brand/png2.png',
    '/assets/images/brand/png3.webp',
    '/assets/images/brand/png4.jpg',
    '/assets/images/brand/png5.jpg',
    '/assets/images/brand/png6.jpg'
];

const BrandArea = () => {
    return (
        <div className="edu-brand-area brand-area-6">
            <div className="container">
                <div className="brand-grid-wrap brand-style-2">
                    {images.map((img, i) => (
                        <div key={i} className="brand-grid">
                            <img src={img} alt="Brand Logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandArea;
