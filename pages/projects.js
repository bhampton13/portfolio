import React, { Component } from 'react';
import Image from 'next/image';

import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="page-container">
      <Meta />
      <Nav />
      <div className="page-content">
        
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
      `}</style>
    </div>
  );
}

export default Projects;