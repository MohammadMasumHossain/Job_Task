import React from "react";
import "./FooterRSC.css";

export default function Footer() {
  return (
   <div>
     <footer className="footer">
      {/* 1. TOP CTA SECTION */}
      <div className="cta-container">
        <h2 className="cta-title">Let’s <br /> talk now</h2>
        <div className="cta-circle-wrap">
          <img 
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/circle-footer.svg" 
            className="circle-spin" 
            alt="Rotate text" 
          />
          <div className="arrow-icon">
            <svg viewBox="0 0 45 18" fill="none" stroke="currentColor">
              <path d="M34.9 17.47L43.92 9L34.9 0.8" strokeWidth="1.5" />
              <path d="M1 9H44" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. MAIN GRID SECTION */}
      <div className="footer-grid">
        {/* Left Side: Image & Background Text */}
        <div className="footer-left">
          <div className="image-wrapper">
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-645x500.jpg"
              alt="Team"
              className="main-img"
            />
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/footer-logo.svg"
              className="inner-logo"
              alt="Logo"
            />
          </div>
          <h2 className="bg-outline-text">Floka</h2>
        </div>

        {/* Right Side: Links & Info */}
        <div className="footer-right">
          <div className="nav-col">
            <ul className="footer-links">
              <li>About Us</li>
              <li>Journal</li>
              <li>Faq</li>
              <li>Get In Touch</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="info-col">
            <p className="description">
              At <strong>Floka</strong>, we believe furniture should be more than just
              functional—it should tell your story. With a focus on timeless
              design, sustainable materials, and expert craftsmanship, we
              create pieces that feel personal.
            </p>
            
            <div className="contact-details">
              <a href="mailto:info@floka-design.com">info@floka-design.com</a>
              <p>+123 (456 789 00)</p>
              <p>12/A, Booston Tower, NYC</p>
            </div>

            <div className="social-links">
              {["facebook", "x", "linkedin", "behance"].map((social) => (
                <a href="#" key={social} className="social-icon">
                   <img src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${social}.svg`} alt={social} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Star Background Shape */}
      <img
        src="https://floka.casethemes.net/wp-content/uploads/2025/06/footer-icon-bg.png"
        className="footer-bg-shape"
        alt=""
      />
    </footer>
    <div className="text-center text-sm mt-4 text-gray-600">
  Copyright © 2025{" "}
  <a
    href="https://themeforest.net/user/case-themes/portfolio"
    className="text-black font-semibold hover:underline"
  >
    Case-Themes
  </a>
</div>
   </div>
  );
}