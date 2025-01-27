import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Tiles from '../components/Tiles';

export default function Home() {
  return (
    <div className="page-container">
      <Meta />
      <Nav />

      <div className="page-content">
        <div className="about">
          <div className="intro-container">
            <h1>Brontë Hampton</h1>
            <h2>Product Developer AND Keen Crafter</h2>
            <h2>@ AND Digital</h2>
          </div>
          <div className="image-container">
            <Image
              src={'/london_sept_027.jpg'}
              alt="red chair photo"
              width={400}
              height={400}
            />
          </div>
        </div>
        <hr />
        <Tiles />
      </div>
      <Footer />
      <style jsx>{`
        .page-container {
          margin: 0;
          height: 100%;
          padding: 0;
        }

        .page-content {
          margin-top: 65px;
          margin-bottom: 75px;
          height: 100%;
          padding: 0.75em 3em;
        }

        .about {
          padding: 0 2% 0 2%;
          margin: 0 0 1.25em 0;
          display: flex;
          flex-direction: row;
          position: relative;
          height: auto;
          width: 100%;
        }

        .intro-container {
          display: block;
          float: left;
          width: 50%;
          padding: 1.25em;
          color: #1c378a;
        }

        .image-container {
          display: flex;
          width: 50%;
          padding: 1.25em;
          justify-content: center;
        }

        hr {
          border-top: 0.75em double #ffca2b;
          margin-bottom: 2.25em;
        }

        @media (max-width: 600px) {
          .page-content {
            margin-bottom: 140px;
          }

          .about {
            flex-direction: column;
            flex-direction: column-reverse;
            width: 100%;
          }

          .intro-container {
            width: 100%;
          }

          .image-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
