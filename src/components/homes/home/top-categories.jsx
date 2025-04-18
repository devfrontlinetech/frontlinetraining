import Link from 'next/link';

const category_contents = {
    title: 'Top Categories',
    // text: 'Explore Our Top Categories for Comprehensive Learning',
    category_items: [
        {
            delay: '50',
            color: 'color-primary-style',
            icon: 'icon-9',
            title: 'AI / ML ',
            link: 'ai-ml'
        },
        {
            delay: '100',
            color: 'color-secondary-style',
            icon: 'icon-10 art-design',
            title: 'Web Design',
            link: 'web-dev'
        },
        {
            delay: '150',
            color: 'color-extra01-style',
            icon: 'icon-11 personal-development',
            title: 'Power Platform',
            link: 'power-platform'
        },
        {
            delay: '50',
            color: 'color-tertiary-style',
            icon: 'icon-12 health-fitness',
            title: 'UI/UX Training',
            link: 'ui-ux'
        },
        {
            delay: '100',
            color: 'color-extra02-style',
            icon: 'icon-13 data-science',
            title: 'Data Science',
            link: 'data-analysis'
        },
        {
            
            delay: '150',
            color: 'color-extra03-style',
            icon: 'icon-14',
            title: 'Digital Marketing',
            link: 'digitalmarketing'
        },
        {
            delay: '50',
            color: 'color-extra04-style',
            icon: 'icon-15',
            title: 'Low code No code',
            link: 'lowcode-nocode'
        },
        {
            delay: '100',
            color: 'color-extra05-style',
            icon: 'icon-16 computer-science',
            title: 'Ethical Hacking',
            link: 'ethical-hacking'

        },
        {
            delay: '150',
            color: 'color-extra06-style',
            icon: 'icon-17 video-photography',
            title: 'Mobile App Development',
            link: 'mob-dev'
        }
    ]
}

const { title, text, category_items } = category_contents;

const TopCategories = () => {
    return (
        <div className="edu-categorie-area categorie-area-2 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p>
                </div>

                <div className="row g-5">
                    {category_items.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6" data-sal-delay={`${item.delay}`} data-sal="slide-up" data-sal-duration="800">
                            <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                     <Link href={item.link}> 
                                        <a>
                                            <h5 className="title">{item.title}</h5>
                                        </a>
                                     </Link> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories;
