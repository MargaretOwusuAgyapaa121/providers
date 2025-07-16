import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Providers Missions</h3>
          <p>
            Providers Missions is committed to transforming lives through
            the love and message of Jesus Christ.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1CUN9Dvn1e/?mibextid=wwXIfr"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/@providersmissions?si=psMWgey1Zd6c4YAe"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <li><a href="/sermons">Sermons</a></li>
            <li><a href="/eventpage">Events</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Support & Help</h4>
          <ul>
            <li><a href="/volunteer">Volunteer</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/prayer-request">Prayer Request</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest news and sermons.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit" style={{ "backgroundColor": "#731399", "color": "white" }}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Providers Missions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
