const brand_contents = {
    pre_title: 'Our Partners',
    title: 'Learn with Our Partners',
    text: 'Partners with universities and organizations to offer courses and specializations in various programming languages and technologies..',
    brands: [
        'assets/images/brand/log-1.jpg',
        'assets/images/brand/log-2.jpg',
        'assets/images/brand/log-3.jpg',
        'assets/images/brand/log-4.jpg',
        'assets/images/brand/log-5.jpg',
        'assets/images/brand/log-6.jpg',
        'assets/images/brand/log-7.jpg',
        'assets/images/brand/log-8.jpg'
    ]
}

const { pre_title, title, text, brands } = brand_contents;

const BrandArea = () => {
    return (
        <div className="edu-brand-area brand-area-1 gap-top-equal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="brand-section-heading">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title">{title}</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="brand-grid-wrap">
                            {brands.map((b, i) => (
                                <div key={i} className="brand-grid">
                                    <img src={b} alt="Brand Logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandArea;