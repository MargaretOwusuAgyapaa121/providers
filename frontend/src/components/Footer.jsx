import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Provider Missions</h3>
          <p>
            Provider Missions is committed to transforming lives through
            the love and message of Jesus Christ.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1CUN9Dvn1e/?mibextid=wwXIfr " aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@providersmissions?si=psMWgey1Zd6c4YAe" aria-label="YouTube">
              <FaYoutube />
            </a>
           
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">Sermons</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Support & Help</h4>
          <ul>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Prayer Request</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest news and sermons.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Provider Missions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
