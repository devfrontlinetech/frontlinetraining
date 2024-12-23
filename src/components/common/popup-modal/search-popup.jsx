
// const SearchPopup = ({isSearchOpen,setIsSearchOpen}) => {
//     const handleSubmit = e => {
//       e.preventDefault();
//     }
//     return (
//         <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
//             <div className="content-wrap">
//                 <div className="site-logo">
//                     <img className="logo-light" src='/assets/images/logo/train1.png' alt="logo" />
//                     <img className="logo-dark" src='/assets/images/logo/train3.png' alt="logo" />
//                 </div>
//                 <div className="close-button" onClick={() => setIsSearchOpen(false)}>
//                     <button className="close-trigger"><i className="icon-73"></i></button>
//                 </div>
//                 <div className="inner">
//                     <form className="search-form" onSubmit={handleSubmit}>
//                         <input type="text" className="edublink-search-popup-field" placeholder="Search Here..." />
//                         <button className="submit-button"><i className="icon-2"></i></button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default SearchPopup;



import React, { useState } from 'react';
import Link from 'next/link';

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  
  const products = [
    { id: 1, name: "courses", link: "/web-dev" },
    { id: 2, name: "digitalmarketing", link: "/digitalmarketing" },
    { id: 3, name: "software testing", link: "/software-testing" },
    { id: 4, name: "ui/ux", link: "/ui-ux" },
    { id: 5, name: "Ethical Hacking", link: "/ethical-hacking" },
    { id: 6, name: "python-datascience", link: "/python-data" },
    { id: 7, name: "Mobile Development", link: "/mob-dev" },
    { id: 8, name: "Full Stack", link: "/full-stack" },
    { id: 9, name: "Web Design", link: "/web-design" },
  ];

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form submission (search)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
      <div className="content-wrap">
        <div className="site-logo">
          <img className="logo-light" src="/assets/images/logo/train1.png" alt="logo" />
          <img className="logo-dark" src="/assets/images/logo/train3.png" alt="logo" />
        </div>
        <div className="close-button" onClick={() => setIsSearchOpen(false)}>
          <button className="close-trigger">
            <i className="icon-73"></i>
          </button>
        </div>
        <div className="inner">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="edublink-search-popup-field"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="submit-button">
              <i className="icon-2"></i>
            </button>
          </form>
          {/* Product List Section - Only display if search matches */}
          {searchTerm && filteredProducts.length > 0 && (
            <div className="product-list">
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    {/* Use Link component directly for navigation */}
                    <Link href={product.link}>
                      <a>{product.name}</a> {/* Direct <a> tag inside <Link> is valid */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* If no search term or no matches, don't display product list */}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;



