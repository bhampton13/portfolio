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
        border-top: 0.75em double #ffffff;
        height: 75px;
        width: 100%;
        margin: 0;
        bottom: 0;
        position: fixed;
      }

      #footer-items {
        font: 1em menlo;
        font-weight: bold;
        color: #1c378a;
        height: auto;
        list-style-type: none;
        padding: 0;
      }

      #footer-items li {
        position: relative;
        float: left;
        width: 50%;
        height: auto;
      }

      .footer-item {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 0.75em 1.25em 0.75em;
      }

      a {
        margin: 0 auto;
        top: 50%;
        height: auto;
      }

      img {
        margin: 0;
        transform: translate(-50%, 25%);
        filter: invert(14%) sepia(88%) saturate(2136%) hue-rotate(218deg)
          brightness(94%) contrast(93%);
      }

      @media (max-width: 600px) {
        .footer-container{
          height: 140px;
        }

        #footer-items li {
          flex-direction: column;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Footer;
