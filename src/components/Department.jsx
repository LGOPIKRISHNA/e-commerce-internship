import React, { useState, useEffect } from "react";
import "../styles/Department.css"; // Import the CSS file for styling

const Department = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsDropdownVisible(false); // Hide dropdown when scrolling down
    } else {
      setIsDropdownVisible(true); // Show dropdown when scrolled back to the top
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="containe">
      {/* Left Section */}
      <div className="left-section">
        <i className="fas fa-bars"></i>
        <span className="department-text">ALL DEPARTMENTS</span>
        <i className="fas fa-chevron-down"></i>
        {/* Static Dropdown Menu */}
        <ul
          className={`static-dropdown-menu ${isDropdownVisible ? "" : "hidden"}`}
        >
          <li className="dropdown-item fashion-dropdown">
  <img
    alt="Icon of a shirt representing Fashion"
    className="dropdown-icon"
    height="24"
    src="https://storage.googleapis.com/a1aa/image/Y1USGcJM6PV7mZs-r5dLa6k_IyHL_Nl_Mpq7iwWBS3U.jpg"
    width="24"
  />
  <span className="dropdown-text">Fashion</span>
  <i className="fas fa-chevron-right"></i>
  <div className="dropdown-submenu">
    <div className="submenu-content">
      <div className="grid-container">
        <div>
          <h2 className="category-title">SPORTS</h2><hr/>
          <ul>
            <li>Speakers</li>
            <li>Boys News</li>
            <li>Girls New</li>
            <li>Cakes & Cookiers</li>
          </ul>
        </div>
        <div>
          <h2 className="category-title">FASHION1</h2><hr/>
          <ul>
            <li>Angene mafin</li>
            <li>Fashion</li>
            <li>Speakers</li>
            <li>Gadgets</li>
          </ul>
        </div>
        <div>
          <h2 className="category-title">JEWELRY</h2><hr/>
          <ul>
            <li>Salads</li>
            <li>Pearl Jewelry</li>
            <li>Delicacies</li>
            <li>Girls New</li>
          </ul>
        </div>
        <div>
          <h2 className="category-title">SPORTS</h2><hr/>
          <ul>
            <li>Electronics</li>
            <li>Egante mangetes</li>
            <li>Printers</li>
            <li>Kitchen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</li>

          <li className="dropdown-item">
            <img
              alt="Icon of a computer representing Computer"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/W2izzBRH5TLFH_RxgYQ80nm85KxvLkB_W2k0P97o9cU.jpg"
              width="24"
            />
            <span className="dropdown-text">Computer</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
  <img
    alt="Icon of a bed representing Furniture"
    className="dropdown-icon"
    height="24"
    src="https://storage.googleapis.com/a1aa/image/i0zUfTNmwKZfl09Mf4sg1vycRmISJ4QnLMBll-8FWP0.jpg"
    width="24"
  />
  <span className="dropdown-text">Furniture</span>
  <i className="fas fa-chevron-right"></i>
  <div className="dropdown-submenu">
    <div className="submenu-content">
      <div className="grid-container1">
        <div>
          <h2 className="category-title">SPORTS</h2>
          <hr />
          <ul>
          <li>Boys News</li>
                    <li>Girls New</li>
                    <li>Cakes & Cookiers</li>
                    <li>Delicacies</li>
                    <li>Salads</li>
                    <li>Angene mafin</li>
                    <li>Fashion</li>
          </ul>
        </div>
        <div>
          <h2 className="category-title">ELECTRONICS</h2>
          <hr />
          <ul>
          <li>Boys News</li>
                    <li>Girls New</li>
                    <li>Cup cake</li>
                    <li>Cakes & Cookiers</li>
                    <li>Boys News</li>
                    <li>Girls New</li>
                    <li>Angene mafin</li>
          </ul>
        </div>
        <div>
          <h2 className="category-title">SPORTS</h2>
          <hr />
          <ul>
          <li>Cakes & Cookiers</li>
                    <li>Living room</li>
                    <li>Venture agoent</li>
                    <li>Boys News</li>
                    <li>Body Chains</li>
                    <li>DIY Beads</li>
                    <li>Web Cameras</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</li>
          <li className="dropdown-item">
            <img
              alt="Icon of a smartphone representing Smartphone"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/UqqSWBcIGFHBnO4LbsLjx0QxOzIJfQix1ujRs25kgIM.jpg"
              width="24"
            />
            <span className="dropdown-text">Smartphone</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a heart representing Health & Beauty"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/GouTbFtSJnbrRpOOc6CcbS9XKFBU3n4H31WrXtrtpag.jpg"
              width="24"
            />
            <span className="dropdown-text">Health &amp; Beauty</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a shoe representing Sport Clothing"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/5FMLduoaMp082F9IC8bNcevUwrGVdeXNjcK-bPUvGmo.jpg"
              width="24"
            />
            <span className="dropdown-text">Sport Clothing</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a diamond representing Watch & Jewelry"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/7qDL02xWiE7b3zhy2146D9bW9kgkuh9bfZmwWdLVUfk.jpg"
              width="24"
            />
            <span className="dropdown-text">Watch &amp; Jewelry</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a spoon representing Kitchen"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/fd7ZHe5oml6eI2AhkjlM0Ga1Ep6qGJhup8Zx1LuSipw.jpg"
              width="24"
            />
            <span className="dropdown-text">Kitchen</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a cap representing Accessories"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/rdPVMcv97R0SF-xHB1fiNzxDxKtIIGc1szR6RsR6DVE.jpg"
              width="24"
            />
            <span className="dropdown-text">Accessories</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="dropdown-item">
            <img
              alt="Icon of a grid representing More Categories"
              className="dropdown-icon"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/kEd5HtTIX_k2lI6aNy3UTQqv5hDoESxvoqC4cn3PNew.jpg"
              width="24"
            />
            <span className="dropdown-text">More Categories</span>
            <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
        
      </div>
      {/* Middle Section */}
      <div className="middle-section">
      <div
          className="category-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-container">
            <span>
              <select style={{ display: isDropdownOpen ? "block" : "" }}>
                <option value="category">All Categories</option>
                <option value="Accessories">Accessories</option>
                <optgroup label="Children">Children
                  <option value="BoysNews">Boys News</option>
                  <option value="GirlsNews">Girls News</option>
                </optgroup>
                <option value="Cosmetic">Cosmetic</option>
                <option value="Glasses">Glasses</option>
                <optgroup label="Jewelry">
                  <option>Bracelet</option>
                  <option>Earrings</option>
                  <option>Necklaces</option>
                  <option>Ring</option>
                </optgroup>
                <option value="Kitchen">Kitchen</option>
                <option value="Laptop & Notebook">Laptop & Notebook</option>
                <option value="Living Room">Living Room</option>
                <optgroup label="Sports">
                  <option value="Accessories">Accessories</option>
                  <option value="Camping&Hiking">Camping&Hiking</option>
                  <option>cusen mariot</option>
                  <option>Electroins</option>
                  <option>Engnite nanet</option>
                  <option>Fashion</option>
                  <optgroup label="Men">
                    <option>Cusen mariot</option>
                    <option>Cusen mariot</option>
                    <option>Denta magela</option>
                  </optgroup>
                  <option>Mobiles</option>
                  <option>Theid cupensg</option>
                  <option>Verture agoent</option>
                  <optgroup>Women
                  <option>Computer</option>
                  </optgroup>
                </optgroup>
                <option>Summer Fashion</option>
                <optgroup label="Laptops&Notebooks">
                  <option>Macs</option>
                  <option>Windows</option>
                </optgroup>
                <optgroup label="Womens">
                <option>Dress</option>
                <option>Necklaces</option>
                <option>Pearl men</option>
                <option>Shirt</option>
                </optgroup>
                <optgroup label="Fashon1">
                  <option>Accessories</option>
                  <option>Alarms</option>
                  <option>Gadgets</option>
                  <option>Printers</option>
                  <option>Scanners</option>
                  <option>Speakers</option>
                  <option>Web Cameras</option>
                </optgroup>
                <optgroup label="Shop Collections">
                  <option>Hanet magente</option>
                  <option>Knage unget</option>
                  <option>Latenge mange</option>
                  <option>Punge nenune</option>
                  <option>Qunge genga</option>
                  <option>Tange manue</option>
                </optgroup>
                <optgroup label="Electroincs">
                  <option>Body chains</option>
                  <option>DIY Beads</option>
                  <option>Egante magentes</option>
                  <option>Necklaces</option>
                </optgroup>
                <option>Phones&PDAs</option>
                <optgroup label="Cup cake">
                  <option>Delicacies</option>
                  <option>Salads</option>
                  <option>Sushi Cormer</option>
                  <option>Cake&Cookiers</option>
                </optgroup>
              </select>
            </span>
          </div>
        </div>
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* Right Section */}
      <div className="right-section">
        <div className="icon-container" data-tooltip="Wishlist">
          <i className="fas fa-heart"></i>
        </div>
        <div className="icon-container" data-tooltip="Compare">
          <i className="fas fa-retweet"></i>
        </div>
        <div className="icon-container cart-icon" data-tooltip="Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Department;