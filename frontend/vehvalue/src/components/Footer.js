import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h3>About Car Resell</h3>
          <p>
            Car Resell is your trusted partner for buying and selling pre-owned cars. 
            We ensure transparency, fair pricing, and expert guidance for a smooth resale experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://www.spinny.com/">Sell Your Car</a></li>
            <li><a href="/buy">Buy a Car</a></li>
            <li><a href="/Calculate">Car Price Calculator</a></li>
          </ul>
        </div>

        {/* Car Tips */}
        <div className="footer-section">
          <h3>Car Care & Resale Tips</h3>
          <ul>
            <li>Maintain regular servicing records</li>
            <li>Keep your car clean and scratch-free</li>
            <li>Use genuine spare parts</li>
            <li>Know the market value before selling</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@carresell.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>
        </div>

      </div>
  {/* Footer bottom */}
        <div style={{ marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px", textAlign: "center" }}>
          <p>&copy; {new Date().getFullYear()} VechValuator | All Rights Reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
