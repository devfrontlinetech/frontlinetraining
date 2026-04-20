"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import useCartInfo from "../../hooks/use-cart-info";
import useSticky from "../../hooks/use-sticky";
import { wishlistItems } from "../../redux/features/wishlist-slice";
import Cart from "./component/cart";

const menuDataTwo = [
  { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Gallery", link: "/gallery-grid" },
  { id: 3, name: "Free Courses", link: "/courses" },
  { id: 4, name: "Blog", link: "/blog-section" },
  { id: 5, name: "Contact Us", link: "/contact-us" },
];

const categories = [
    { title: 'Digital Marketing Training', link: '/digitalmarketing', hot: true },
    { title: 'UI/UX Training', link: '/ui-ux' },
    { title: ' Full stack MERN Training', link: '/mern-python' },
    { title: 'Software Testing', link: '/software-testing' },
    { title: 'Python with Data Science', link: '/python-data' },
    { title: 'Data Analysis Training', link: '/data-analysis' },
    { title: 'AI/ML Training', link: '/ai-ml' },
    { title: 'Ethical Hacking', link: '/ethical-hacking' },
    { title: 'Free Courses', link: '/free-courses' }
];


const HeaderFour = ({disable_category}) => {
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const wishlists = useSelector(wishlistItems);
  const pathname = usePathname();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="edu-header header-style-4 header-fullwidth no-topbar">
        <div id="edu-sticky-placeholder"></div>

        {/* ✅ Sticky class applied here */}
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              {/* ===== LOGO ===== */}
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <img
                      className="logo-light"
                      src="/assets/images/fnline/Frontline_Logo_Dark.png"
                      alt="Logo"
                    />
                    <img
                      className="logo-dark"
                      src="/assets/images/fnline/Frontline_Logo_White.png"
                      alt="Logo"
                    />
                  </Link>
                </div>

                 {!disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    {/* <button><i className="icon-1"></i>Category</button> */}
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

              {/* ===== MENU ===== */}
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    {menuDataTwo.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.link}
                          className={
                            pathname === item.link ? "active-link" : ""
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                      />
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        className="search-btn"
                        type="button"
                      >
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </li>

                  <li className="icon search-icon">
                    <a href="#" className="search-trigger">
                      <i className="icon-2"></i>
                    </a>
                  </li>

                  {/* <li className="icon">
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
                  </li> */}

                  <li className="header-btn">
                    <Link href="/contact-me" legacyBehavior>
                      <a className="edu-btn btn-medium btn-curved">
                        Try for free <i className="icon-4"></i>
                      </a>
                    </Link>
                  </li>

                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH POPUP */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </header>

      {/* SIDEBAR */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HeaderFour;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// import Image from "next/image";

// const menuData = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Courses", link: "/courses" },
//   { id: 3, name: "Contact", link: "/contact" },
// ];

// const Header = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header-container">
//       <div className="header-box">
//         {/* Logo */}
//         <Link href="/" className="logo">
//           <Image
//             src="/assets/images/free-course/logo.png"
//             alt="Logo"
//             width={150}
//             height={50}
//             className="logo-img"
//           />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </div>

//         {/* Nav */}
//         <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
//           <ul>
//             {menuData.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   href={item.link}
//                   className={pathname === item.link ? "active-link" : ""}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* CTA */}
//         <div className="header-cta">
//           <button
//             className="start-btn"
//             onClick={() => router.push("/register")}
//           >
//             Start Learning
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
