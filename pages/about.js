import React, { Component } from 'react';
import Image from 'next/image';

import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Tiles from '../components/Tiles';

function About() {
  return (
    <div className="page-container">
      <Meta />
      <Nav />

      <div className="page-content">
        <div className="about">
          <div className="intro-container">
            <h1>Brontë Hampton</h1>
            <h2>Associate AND Keen Crafter</h2>
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
          overflow-y: scroll;
          display: inline-block;
        }

        .about {
          padding-bottom: 0 2% 0px 2%;
          margin: 0 0 20px 0;
          display: table;
          position: relative;
          height: auto;
        }

        .intro-container {
          display: table-cell;
          float: left;
          margin: 0 10px;
          padding: 20px;
          color: #1c378a;
        }

        .image-container {
          display: table-cell;
          width: 50%;
          margin: 0 10px;
          padding: 20px 20px;
          
        }
      `}</style>
    </div>
  );
}

export default About;