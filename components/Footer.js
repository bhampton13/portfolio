import React from 'react';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-items">
      <p>footer</p>
    </div>
    <style jsx>{`
      .footer-container {
        background: #ffca2b;
        border-top: 12px double #ffffff;
        height: auto;
        width: 100%;
        margin: 0;
        bottom: 0;
        position: fixed;
      }

      .footer-items {
        font: 14px menlo;
        font-weight: bold;
        padding: 20px;
      }
    `}</style>
  </div>
);

export default Footer;
