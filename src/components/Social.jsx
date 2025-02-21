import React from "react";
import ReactDOM from "react-dom";
import "../styles/Social.css"; // Import the CSS file for styling

const Social = () => {
  return ReactDOM.createPortal(
    <div className="social-container">
      {/* Left Side: Social Media Icons */}
      <div className="left-icons">
        {/* Facebook Icon */}
        <a href="#" className="icon facebook" data-tooltip="Follow us on Facebook">
          <i className="fab fa-facebook-f"></i>
          <div className="hover-box">
            <p>Stay connected with us!</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Follow on Facebook
            </a>
          </div>
        </a>

        {/* Twitter Icon */}
        <a href="#" className="icon twitter" data-tooltip="Follow us on Twitter">
          <i className="fab fa-twitter"></i>
          <div className="hover-box">
            <p>Get the latest updates!</p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Follow on Twitter
            </a>
          </div>
        </a>

        {/* YouTube Icon */}
        <a href="#" className="icon youtube" data-tooltip="Subscribe on YouTube">
          <i className="fab fa-youtube"></i>
          <div className="hover-box">
            <p>Watch our videos!</p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </div>
        </a>
      </div>

      {/* Right Side: Navigation Icons */}
      <div className="right-icons">
        <div className="icon menu" data-tooltip="Categories">
          <i className="fas fa-bars"></i>
        </div>
        <div className="icon cart" data-tooltip="Cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="icon user" data-tooltip="Account">
          <i className="fas fa-user"></i>
        </div>
        <div className="icon search" data-tooltip="Search">
          <i className="fas fa-search"></i>
        </div>
        <div className="icon eye" data-tooltip="Recent View">
          <i className="fas fa-eye"></i>
        </div>
        <div
          className="icon up"
          data-tooltip="Go To Top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") // Render into the portal container
  );
};

export default Social;