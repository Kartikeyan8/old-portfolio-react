import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="footer-links">
          <a href="/">Home</a> |   <a href="/contact">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
