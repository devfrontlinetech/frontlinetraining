
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


{/*New code added 26/12/2024*/}
import React, { useState } from 'react';
import Link from 'next/link';

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  // Sample products data (could be fetched from an API or defined elsewhere)
  const products = [
    { id: 1, name: 'courses', link: '/web-dev' },
    { id: 2, name: 'digitalmarketing', link: '/digitalmarketing' },
    { id: 3, name: 'software testing', link: '/software-testing' },
    { id: 4, name: 'ui/ux', link: '/ui-ux' },
    { id: 5, name: 'Ethical Hacking', link: '/ethical-hacking' },
    { id: 6, name: 'python-datascience', link: '/python-data' },
    { id: 7, name: 'Mobile Development', link: '/mob-dev' },
    { id: 8, name: 'Full Stack', link: '/full-stack' },
    { id: 9, name: 'Web Design', link: '/web-design' },
    { id: 10, name: 'html', link: '/web-dev' },
    { id: 11, name: 'css', link: '/web-dev' },
    { id: 12, name: 'javascript', link: '/web-dev' },
    { id: 13, name: 'Ai-Ml', link: '/ai-ml' },
    { id: 14, name: 'Power-Platform', link: '/power-platform' },
    { id: 15, name: 'Low code- No code', link: '/lowcode-nocode' },
    
    
  ];

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form submission (search)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle search functionality, maybe redirect or other logic
  };

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
              onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            />
            <button type="submit" className="submit-button">
              <i className="icon-2"></i>
            </button>
          </form>
          
          {/* Display filtered product list if there are matches */}
          {searchTerm && filteredProducts.length > 0 && (
            <div className="product-list">
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <Link href={product.link}>
                      <a>{product.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Optionally display a message if no results are found */}
          {searchTerm && filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;



