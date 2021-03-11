import React, { Component } from 'react';

const tileData = [
  { title: 'js', link: 'javascript' },
  { title: 'Next.js', link: 'nextjs' },
  { title: 'React.js', link: 'react' },
  { title: 'node', link: 'nodejs' },
  { title: 'html5', link: 'html5' },
  { title: 'css3', link: 'css3' },
  { title: 'sass', link: 'sass' },
  { title: 'swift', link: 'swift' },
  { title: 'python', link: 'python' },
  { title: 'flask', link: 'flask' },
  { title: 'php', link: 'php' },
  { title: 'laravel', link: 'laravel' },
  { title: 'arduino', link: 'arduino' },
  { title: 'java', link: 'java' },
  { title: 'aws', link: 'amazonaws' },
  { title: 'firebase', link: 'firebase' },
  { title: 'postgresql', link: 'postgresql' },
  { title: 'sqlite', link: 'sqlite' },
  { title: 'mysql', link: 'mysql' },
  { title: 'github', link: 'github' },
  { title: 'gitlab', link: 'gitlab' },
  { title: 'bitbucket', link: 'bitbucket' },
  { title: 'circleci', link: 'circleci' },
  { title: 'postman', link: 'postman' },
  { title: 'atlassian', link: 'atlassian' },
  { title: 'jira', link: 'jira' },
  { title: 'trello', link: 'trello' },
  { title: 'slack', link: 'slack' },
  { title: 'jest', link: 'jest' },
];

class Tiles extends Component {
  render() {
    return (
      <ul id="grid">
        {tileData.map((item) => (
          <li key={item.title}>
            <div className="hex-tile">
              <img
                src={`https://icongr.am/simple/${item.link}.svg`}
                alt={`${item.title}-logo`}
              />
            </div>
          </li>
        ))}
        <style jsx>{`
          #grid {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            margin: 0 5% 0 3%;
            padding: 0;
          }

          .clear:after {
            content: '';
            display: block;
            clear: both;
          }

          #grid li {
            list-style-type: none;
            position: relative;
            float: left;
            width: 12.85714285714286%;
            padding: 0 0 14.87860145166612% 0;
            -o-transform: rotate(-60deg) skewY(30deg);
            -moz-transform: rotate(-60deg) skewY(30deg);
            -webkit-transform: rotate(-60deg) skewY(30deg);
            -ms-transform: rotate(-60deg) skewY(30deg);
            transform: rotate(-60deg) skewY(30deg);
            overflow: hidden;
            visibility: hidden;
          }

          #grid li * {
            visibility: visible;
          }

          .hex-tile {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #1c378a;
            -o-transform: skewY(-30deg) rotate(60deg);
            -moz-transform: skewY(-30deg) rotate(60deg);
            -webkit-transform: skewY(-30deg) rotate(60deg);
            -ms-transform: skewY(-30deg) rotate(60deg);
            transform: skewY(-30deg) rotate(60deg);
            overflow: hidden;
            text-align: center;
          }

          #grid li .hex-tile img {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 60%;
            width: 60%;
            filter: invert(1);
          }

          #grid li:nth-child(1n + 1) {
            margin: 0.5%;
          }

          #grid li:nth-child(14n + 8),
          #grid li:nth-child(14n + 9),
          #grid li:nth-child(14n + 10),
          #grid li:nth-child(14n + 11),
          #grid li:nth-child(14n + 12),
          #grid li:nth-child(14n + 13),
          #grid li:nth-child(14n + 14) {
            margin-top: -2.9285714285%;
            margin-bottom: -2.9285714285%;
            -o-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -moz-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            transform: translateX(50%) rotate(-60deg) skewY(30deg);
          }

          #grid li:nth-child(14n + 8) {
            margin-left: 1%;
          }
        `}</style>
      </ul>
    );
  }
}

export default Tiles;
