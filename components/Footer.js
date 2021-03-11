import React from 'react';

const Footer = () => (
  <div className="footer-container">
    <ul id="footer-items">
      <li>
        <div className="footer-item">
          <a href="https://www.linkedin.com/in/brontehampton/">
            <img
              src={`https://icongr.am/simple/linkedin.svg`}
              alt={`linkedin-logo`}
            />
            Brontë Hampton
          </a>
        </div>
      </li>
      <li>
        <div className="footer-item">
          <a href="https://github.com/bhampton13">
            <img
              src={`https://icongr.am/simple/github.svg`}
              alt={`github-logo`}
            />
            bhampton13
          </a>
        </div>
      </li>
    </ul>
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

      #footer-items {
        font: 14px menlo;
        font-weight: bold;
        color: #1c378a;
        height:auto;
      }

      #footer-items li {
        list-style-type: none;
        position: relative;
        float: left;
        width: 50%;
        height: auto;
      }

      .footer-item {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 10px 20px 10px;
      }

      a {
        margin: 0 auto;
        top: 50%;
        height: auto;
      }

      img {
        margin: 0;
        // position: absolute;
        transform: translate(-50%, 25%);
        filter: invert(14%) sepia(88%) saturate(2136%) hue-rotate(218deg)
          brightness(94%) contrast(93%);
      }
    `}</style>
  </div>
);

export default Footer;
