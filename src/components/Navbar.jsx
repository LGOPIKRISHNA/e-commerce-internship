// import React, { useState } from 'react';
// import { ShoppingCart, Heart, Search, Menu, Store, ChevronDown } from 'lucide-react';
// import '../styles/Navbar.css';

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Tracks open dropdowns
//   const [isMenuActive, setIsMenuActive] = useState(false); // Mobile menu toggle
//   const openUsersPage = () => {
//     const newTab = window.open("/userspage", "_blank");
//     if (newTab) {
//       newTab.focus();
//     } else {
//       alert("Popup blocked! Please allow popups for this site.");
//     }
//   };
//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive); // Toggle mobile menu
//   };

//   const toggleDropdown = (menu) => {
//     setIsDropdownOpen((prev) => (prev === menu ? null : menu)); // Close other dropdowns
//   };

//   return (
//     <nav className="navbar">
//       <div className="container navbar-container">
//         <div className="brand">
//           <Store className="w-6 h-6" />
//           <h1 className="brand-title">Style Store</h1>
//           {/* <button onClick={openUsersPage}>bihiuu</button> */}
          
//           <button className="icon-button menu-button" onClick={toggleMenu}>
//           <Menu className="w-5 h-5" />
//         </button>
//         </div>

//         {/* Navigation Links */}
//         <div className={`nav-links ${isMenuActive ? 'active' : ''}`}>
//           <a href="#" className="nav-link">Home</a>
//           <a href="#" className="nav-link">ItemLayout</a>
//           <a href="#" className="nav-link">FEATURES</a>
//           <a href="#" className="nav-link">LISTING DETAILS</a>


//           <a href="#" className="nav-link">ELECTRONIC</a>
//           <a href="#" className="nav-link">BLOG</a>
//           <a href="#" className="nav-link">PAGES</a>


//           <a href="#" className="nav-link">MARKETPLACE</a>
//           {/* Shop Dropdown */}
//           {/* <div
//             className={`nav-link shop-link ${isDropdownOpen === "shop" ? "active" : ""}`}
//             onClick={() => toggleDropdown("shop")}
//             onMouseEnter={window.innerWidth >= 769 ? () => toggleDropdown("shop") : null}
//             onMouseLeave={window.innerWidth >= 769 ? () => toggleDropdown(null) : null}
//           >
//             Shop ▼
//             {isDropdownOpen === "shop" && (
//               <div className="dropdown-menu">
//                 <a href="#" className="dropdown-item">Speakers</a>
//                 <a href="#" className="dropdown-item">Rengae manges</a>
//                 <a href="#" className="dropdown-item">Angene mafin</a>
//                 <a href="#" className="dropdown-item">Fashion</a>
//                 <a href="#" className="dropdown-item">Egante mangetes</a>
//                 <a href="#" className="dropdown-item">Macs</a>
//               </div>
//             )}
//           </div> */}

          
//         </div>

//         {/* Right Actions (Search, Wishlist, Cart) */}
        
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, Store, ChevronDown } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Tracks open dropdowns
  const [isMenuActive, setIsMenuActive] = useState(false); // Mobile menu toggle

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); // Toggle mobile menu
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => (prev === menu ? null : menu)); // Close other dropdowns
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Brand Section */}
        <div className="brand">
          <Store className="w-6 h-6" />
          <h1 className="brand-title">Style Store</h1>
          <button className="icon-button menu-button" onClick={toggleMenu}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuActive ? 'active' : ''}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">ItemLayout</a>
          <a href="#" className="nav-link">FEATURES</a>
          <a href="#" className="nav-link">LISTING DETAILS</a>

          {/* Dropdown for ELECTRONIC */}
          <div
  className={`nav-link dropdown-link ${isDropdownOpen === "electronic" ? "active" : ""}`}
  onMouseEnter={() => toggleDropdown("electronic")}
  onMouseLeave={() => toggleDropdown(null)}
>
  ELECTRONIC ▼
  <div className={`dropdown-menu ${isDropdownOpen === "electronic" ? "open" : ""}`}>
    <div className="category-grid">
      {/* Speakers Column */}
      <div className="category-column">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/menu-img1.jpg"></img>
        <h4>Speakers</h4>
        <ul>
          <li>Rengae Manges</li>
          <li>Angene Malin</li>
          <li>Fashion</li>
          <li>Egante Mangeries</li>
          <li>Macs</li>
        </ul>
      </div>

      {/* Pearl Jewelry Column */}
      <div className="category-column">
      <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/menu-img2.jpg"></img>
        <h4>Pearl Jewelry</h4>
        <ul>
          <li>Dental Magela</li>
          <li>Delicacies</li>
          <li>Jewelry</li>
          <li>Delicacies</li>
          <li>Sushi Cormer</li>
        </ul>
      </div>

      {/* Speakers Column (Duplicate as per PDF) */}
      <div className="category-column">
      <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/menu-img3.jpg"></img>
        <h4>Speakers</h4>
        <ul>
          <li>Electronics</li>
          <li>Angene Malin</li>
          <li>Necklaces</li>
          <li>Alarms</li>
          <li>Qunge Genga</li>
        </ul>
      </div>

      {/* Women Column */}
      <div className="category-column">
      <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/menu-img3.jpg"></img>
        <h4>Women</h4>
        <ul>
          <li>Web Cameras</li>
          <li>Windows</li>
          <li>Boys News</li>
          <li>Pearl Jewelry</li>
          <li>Jewelry</li>
        </ul>
      </div>
    </div>
  </div>
</div>

          {/* Dropdown for BLOG */}
          <div
  className={`nav-link dropdown-link ${isDropdownOpen === "blog" ? "active" : ""}`}
  onMouseEnter={() => toggleDropdown("blog")}
  onMouseLeave={() => toggleDropdown(null)}
>
  BLOG ▼
  <div className={`dropdown-menu ${isDropdownOpen === "blog" ? "open" : ""}`}>
    <div className="category-grid1">
      {/* Blog Item 1 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 1" />
        <h5>Blog 1 Column</h5>
        {/* <p>Discover the newest trends in technology and innovation.</p> */}
      </div>
      {/* Blog Item 2 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 2" />
        <h5>Blog 2 Column</h5>
        {/* <p>Step-by-step guides to help you master new skills.</p> */}
      </div>
      {/* Blog Item 3 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 3" />
        <h5>Blog 3 Column</h5>
        {/* <p>Honest reviews of the latest gadgets and tools.</p> */}
      </div>
      {/* Blog Item 4 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 4" />
        <h5>Blog 4 Column</h5>
        {/* <p>Stay updated with the latest news from the tech world.</p> */}
      </div>
    </div>
    <div className="category-grid1">
      {/* Blog Item 1 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 1" />
        <h5>Blog 1 Column</h5>
        {/* <p>Discover the newest trends in technology and innovation.</p> */}
      </div>
      {/* Blog Item 2 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 2" />
        <h5>Blog 2 Column</h5>
        {/* <p>Step-by-step guides to help you master new skills.</p> */}
      </div>
      {/* Blog Item 3 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 3" />
        <h5>Blog 3 Column</h5>
        {/* <p>Honest reviews of the latest gadgets and tools.</p> */}
      </div>
      {/* Blog Item 4 */}
      <div className="category-column1">
        <img src="https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/menu/feature/blog-col3.png" alt="Blog Post 4" />
        <h5>Blog 4 Column</h5>
        {/* <p>Stay updated with the latest news from the tech world.</p> */}
      </div>
    </div>
  </div>
</div>

          {/* Dropdown for PAGES */}
          <div
  className={`nav-link dropdown-link ${isDropdownOpen === "pages" ? "active" : ""}`}
  onMouseEnter={() => toggleDropdown("pages")}
  onMouseLeave={() => toggleDropdown(null)}
>
  PAGES ▼
  <div className={`dropdown-menu ${isDropdownOpen === "pages" ? "open" : ""}`}>
    <div className="category-grid2">
      {/* About Us */}
      <div className="category-column">
        
        <h4>About Us</h4>
        {/* <p>Learn more about our company and mission.</p> */}
      </div>
      {/* Contact */}
      <div className="category-column">
        {/* <img src="https://via.placeholder.com/150" alt="Contact" /> */}
        <h4>Contact</h4>
        {/* <p>Get in touch with us for support or inquiries.</p> */}
      </div>
      {/* FAQ */}
      <div className="category-column">
        {/* <img src="https://via.placeholder.com/150" alt="FAQ" /> */}
        <h4>FAQ</h4>
        {/* <p>Find answers to frequently asked questions.</p> */}
      </div>
      {/* Privacy Policy */}
      <div className="category-column">
        {/* <img src="https://via.placeholder.com/150" alt="Privacy Policy" /> */}
        <h4>Privacy Policy</h4>
        {/* <p>Read our policies on data protection and privacy.</p> */}
      </div>
    </div>
  </div>
</div>

          <a href="#" className="nav-link">MARKETPLACE</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;