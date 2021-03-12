import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <div>
    <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="Description" content="portfolio." />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        background: #ffffff;
        font: 1em menlo;
        margin: 0;
      }
    `}</style>
  </div>
);

export default Meta;
