import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Nav = () => (
  <div className="nav-container">
    <div className="nav-items">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
    <style jsx>{`
      .nav-container {
        background: #ffca2b;
        border-bottom: 12px double #ffffff;
        height: auto;
        width: 100%;
        margin: 0;
        position: fixed;
        top: 0;
        z-index: 100;
      }

      .nav-items {
        font: 18px menlo;
        font-weight: bold;
        padding: 20px;
      }

      a {
        color: #1c378a;
      }
    `}</style>
  </div>
);

export default Nav;
