import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
            <h2>Associate AND Keen Crafter</h2>
            <h2>@ AND Digital</h2>
          </div>
          <div className="image-container">
            <Image 
              src={"/london_sept_027.jpg"}
              alt="red chair photo"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Tiles />
      </div>
      <Footer />
      <style jsx>{`
        .page-content {
          margin: 10% 5%;
        }

        .about {
          padding-bottom: 0 2% 0 2%;
          margin: 0 0 1.25em 0;
          display: table;
          position: relative;
          height: auto;
          width: 100%;
        }

        .intro-container {
          display: table-cell;
          float: left;
          margin: 0 0.75em;
          padding: 1.25em;
          color: #1c378a;
        }

        .image-container {
          display: table-cell;
          width: 50%;
          margin: 0 0.75em;
          padding: 1.25em;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
