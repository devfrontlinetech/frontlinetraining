
//New code 27/12/2024

import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';

// Sample product data (this should be replaced with actual dynamic data)
const products = [
    { id: 1, name: 'courses', link: '/web-dev' },
    { id: 2, name: 'digitalmarketing', link: '/digitalmarketing' },
    { id: 3, name: 'software testing', link: '/software-testing' },
    { id: 4, name: 'ui/ux', link: '/ui-ux' },
    { id: 5, name: 'Ethical Hacking', link: '/course-details/ethical-hacking' },
    { id: 6, name: 'python-datascience', link: '/python-data' },
    { id: 7, name: 'Mobile Development', link: '/mob-dev' },
    { id: 8, name: 'Full Stack', link: '/full-stack' },
    { id: 9, name: 'Web Design', link: '/web-design' },
    { id: 10, name: 'html', link: '/course-details/fullstack' },
    { id: 11, name: 'css', link: '/course-details/fullstack' },
    { id: 12, name: 'javascript', link: '/course-details/javascript-2hrs' },
    { id: 13, name: 'Ai-Ml', link: '/ai-ml' },
    { id: 14, name: 'Power-Platform', link: '/power-platform' },
    { id: 15, name: 'Low code- No code', link: '/lowcode-nocode' },
    { id: 16, name: 'php, Mysql', link: '/course-details/web-development' },
    { id: 17, name: 'frontend course', link: '/course-details/frontend-course' },
    { id: 18, name: 'advanced fullstack', link: '/course-details/advanced-fullstack' },
    { id: 19, name: 'python', link: '/course-details/python' },
    { id: 20, name: 'mobile designing', link: '/course-details/mobile-designer' }, 
   
    
];

const categories = [
    { title: 'Digital Marketing Training', link: '/digitalmarketing', hot: true },
    { title: 'UI/UX Training', link: '/ui-ux' },
    { title: ' Full stack MERN Training', link: '/mern-python' },
    { title: 'Software Testing', link: '/software-testing' },
    { title: 'Python with Data Science', link: '/python-data' },
    { title: 'Data Analysis Training', link: '/data-analysis' },
    { title: 'AI/ML Training', link: '/ai-ml' },
    { title: 'Ethical Hacking', link: '/ethical-hacking' }
];

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter products based on the search term
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
                {!no_top_bar && 
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'} legacyBehavior>
                                        <a>
                                            <img className="logo-light" src='/assets/images/fnline/Frontline_Logo_Dark.png' alt="logo" />
                                            <img className="logo-dark" src='/assets/images/fnline/Frontline_Logo_White.png' alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                {!disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    <ul className="submenu">
                                                        {categories.map((category, i) => (
                                                            <li key={i}>
                                                                <Link href={category.link} legacyBehavior><a>{category.title}</a></Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                }
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* Main menu */}
                                    <MainMenu />
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="search-bar">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                            />
                                            <button className="search-btn" type="button" aria-label="Name">
                                                <i className="icon-2"></i>
                                            </button>
                                        </div>

                                        {/* Display the search results in a dropdown */}
                                        {searchTerm && filteredProducts.length > 0 && (
                                            <div className="dropdown-results">
                                                <ul>
                                                    {filteredProducts.map((product) => (
                                                        <li key={product.id}>
                                                            <Link href={product.link} legacyBehavior>
                                                                <a>{product.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li className="icon search-icon">
{/*                                         <a href="#" style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a> */}
                                        <button style={{cursor:'pointer',backgroundColor:'transparent',border:'none'}} type="button" onClick={() => setIsSearchOpen(true)} className="search-trigger" aria-label="Name">
                                            <i className="icon-2" style={{fontSize:'25px'}}></i>
                                        </button>
                                    </li>
                                    <li className="icon">
                                        <Link href="/wishlist" legacyBehavior>
                                            <a className="wishlist">
                                                <i className="icon-22"></i>
                                                <span className="count">{wishlists?.length}</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="icon cart-icon">
                                        <Link href="/cart" legacyBehavior>
                                            <a className="cart-icon">
                                                <i className="icon-3"></i>
                                                <span className="count">{quantity}</span>
                                            </a>
                                        </Link>
                                        <Cart />
                                    </li>
                                    <li className="header-btn">
                                        <Link href="https://wa.me/919789655455?text=I%20need%20course%20details" legacyBehavior>
                                            <a className="edu-btn btn-medium">Get Details
                                                <i className="icon-4"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}  aria-label="Name">
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Popup */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            </header>

            {/* Sidebar */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}

export default Header;




// old code and modified
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useSelector } from 'react-redux';
// import MainMenu from '../headers/component/main-menu';
// import HeaderTopRight from '../headers/component/header-top-right';
// import HeaderTopLeft from '../headers/component/header-top-left';
// import SearchPopup from '../../components/common/popup-modal/search-popup';
// import useSticky from '../../hooks/use-sticky';
// import { wishlistItems } from '../../redux/features/wishlist-slice';
// import useCartInfo from '../../hooks/use-cart-info';
// import OffCanvas from '../../components/common/sidebar/off-canvas';
// import Cart from './component/cart';

// const categories = [
// /*  { link: '/course-style-1', title: 'Web Design ' },
//     { link: '/course-style-2', title: 'Web Development ' },
//     { link: '/course-style-3', title: 'Graphic Design' },
//     { link: '/course-style-4', title: 'Mobile Apps ' },
//     { link: '/course-style-5', title: 'Plugin Development' },
//     { link: '/course-style-1', title: 'Marketing SEO' },
//     { link: '/course-style-2', title: 'Image Editing ' },
//     { link: '/course-style-3', title: 'It Consultancy' }, */



//             { title: 'Digital Marketing Training', link: '/digitalmarketing', hot: true },
//             { title: 'UI/UX Training', link: '/ui-ux' },
//             { title: ' Full stack MERN (Mongo Express React Node) Training', link: '/mern-python' },
//             { title: 'Software Testing', link: '/software-testing' },
//             { title: ' Python with Data Science Training', link: '/python-data' },
//             { title: ' Data Analysis Training', link: '/data-analysis' },
//             { title: 'AI/ML Training', link: '/ai-ml' },
//            // { title: ' DevOps Training', link: '/home-modern-schooling', new: true },
//             { title: 'Ethical Hacking', link: '/ethical-hacking' }
    
    
// ]

// const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
//     const { sticky } = useSticky();
//     const { quantity } = useCartInfo();
//     const wishlists = useSelector(wishlistItems);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
//                 { ! no_top_bar && 
//                     <div className="header-top-bar">
//                         <div className="container-fluid">
//                             <div className="header-top">
//                                 <div className="header-top-left">
//                                     <HeaderTopLeft />
//                                 </div>
//                                 <div className="header-top-right">
//                                     <HeaderTopRight />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
// }
//                 <div id="edu-sticky-placeholder"></div>
//                 <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
//                     <div className="container-fluid">
//                         <div className="header-navbar">
//                             <div className="header-brand">
//                                 <div className="logo">
//                                     <Link href={'/'}>
//                                         <a>
//                                             <img className="logo-light" src='/assets/images/fnline/Frontline_Logo_Dark.png' alt="logo" />
//                                             <img className="logo-dark" src='/assets/images/fnline/Frontline_Logo_White.png' alt="logo" />
//                                         </a>
//                                     </Link>
//                                 </div>

//                                 { ! disable_category &&
//                                     <div className="header-category">
//                                         <nav className="mainmenu-nav">
//                                             <ul className="mainmenu">
//                                                 <li className="has-droupdown">
//                                                     <a href="/"><i className="icon-1"></i>Category</a>
//                                                     <ul className="submenu">
//                                                         {
//                                                             categories.map((category, i) => (
//                                                                 <li key={i}>
//                                                                     <Link href={`${category.link}`}><a>{category.title}</a></Link>
//                                                                 </li>
//                                                             ) )
//                                                         }
//                                                     </ul>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </div>
//                                 }
//                             </div>
//                             <div className="header-mainnav">
//                                 <nav className="mainmenu-nav">
                                    
//                                     {/* main menu start*/}
//                                     <MainMenu  />
//                                     {/* main menu end */}
//                                 </nav>
//                             </div>
//                             <div className="header-right">
//                                 <ul className="header-action">
//                                     <li className="search-bar">
//                                         <div className="input-group">
//                                              <input type="text" className="form-control" placeholder="Search" /> 
//                                             <button className="search-btn" type="button">
//                                                 <i className="icon-2"></i>
//                                             </button>
                                           
//                                         </div>
//                                     </li>
//                                     <li className="icon search-icon">
//                                         <a style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger" aria-label="Open Search Box">
//                                             <i className="icon-2"></i>
//                                         </a>
//                                     </li>
                                     
//                                     <li className="icon">
//                                         <Link href="/wishlist">
//                                             <a className="wishlist">
//                                                 <i className="icon-22"></i>
//                                                 <span className="count">{wishlists?.length}</span>
//                                             </a>
//                                         </Link>
//                                     </li>
//                                     <li className="icon cart-icon">
//                                         <Link href="/cart">
//                                             <a className="cart-icon">
//                                                 <i className="icon-3"></i>
//                                                 <span className="count">{quantity}</span>
//                                             </a>
//                                         </Link>
//                                         <Cart />
//                                     </li>
//                                     <li className="header-btn">
//                                         <Link href="https://wa.me/919789655455?text=I%20need%20course%20details">
//                                             <a className="edu-btn btn-medium">Get Details
//                                             <i className="icon-4"></i></a>
//                                         </Link>
//                                     </li>
//                                     <li className="mobile-menu-bar d-block d-xl-none">
//                                         <button className="hamberger-button" onClick={() => setIsOpen(true)} aria-label="Name">
//                                             <i className="icon-54"></i>
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <!-- Start Search Popup  --> */}
//                 <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
//                 {/* <!-- End Search Popup  --> */}
//             </header>

//             {/* sidebar start */}
//             <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
//             {/* sidebar end */}
//         </>
//     )
// }

// export default Header;
