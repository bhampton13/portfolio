import React, { Component } from 'react';
import Image from 'next/image';

import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="page-container">
      <Meta />
      <Nav />
      <div className="page-content">
        <div className="section-container">
          <h2>Profile</h2>
          <hr />
          <p>
            A keen and creative hard-working individual, with an eye for detail.
            Excellent time and people management skills with a well-rounded set
            of interpersonal skills. Can work autonomously or as part of a team.
            Adaptable and quick to learn new skills.
          </p>
        </div>
        <div className="section-container">
          <h2>Key Skills</h2>
          <hr />
          <ul>
            <li>
              <strong>Mobile Development:</strong> Confident developing iOS
              mobile applications using Swift and SwiftUI
            </li>
            <li>
              <strong>Web Development:</strong> Experience developing with
              JavaScript frameworks React, Vue and Next. Also confident in using
              WordPress, HTML5, CSS3, PHP
            </li>
            <li>
              <strong>Other Programming Languages:</strong> Python, Java, C
            </li>
            <li>
              <strong>Databases:</strong> Knowledge of SQL from using PostgreSQL
              and SQLite. Experience using Amazon DynamoDB and Google Firebase
              Cloud Firestore NoSQL databases.
            </li>
            <li>
              <strong>Version Control Systems:</strong> Git (GitHub, GitLab,
              BitBucket)
            </li>
            <li>
              <strong>Operating Systems:</strong> macOS, Linux and Windows
            </li>
            <li>
              <strong>Agile Practices:</strong> Gained experience of working
              using Scrum/Scrumban on year in industry
            </li>
            <li>
              <strong>Full Current Clean Driving License</strong>
            </li>
          </ul>
        </div>
        <div className="section-container">
          <h2>Employment History</h2>
          <hr />
          <div className="sub-section-container">
            <h3>AND DIGITAL LIMITED</h3>
            <p>
              CLUB ADA, WEWORK ALDWYCH HOUSE, 71-91 ALDWYCH, LONDON, WC2B 4HN
              <br />
              <strong>ASSOCIATE AND KEEN CRAFTER</strong> <br />
              FEB 2021 – PRESENT
            </p>
            <p className="indented-p"></p>
          </div>
          <div className="sub-section-container">
            <h3>ASDA STORES LIMITED</h3>
            <p>
              HOLLY MOUNT WAY, RAWTENSTALL, ROSSENDALE, LANCASHIRE, BB4 8EE{' '}
              <br />
              <strong>
                VARIOUS ROLES (INC. CHECKOUT OPERATOR/SELF-SERVICE
                HOST/GEORGE/PERSONAL SHOPPER)
              </strong>
              <br /> OCT 2013 – DEC 2019
            </p>
            <p className="indented-p">
              Ability to work at a fast pace in an ever-changing environment. I
              have been responsible for keeping the self-service lanes running
              smoothly and resolving/reporting maintenance issues that arise. I
              helped with the introduction of Hybrid tills within the store
              aiding customer transition to the new technology.
            </p>
          </div>
          <div className="sub-section-container">
            <h3>AND DIGITAL LIMITED</h3>
            <p>
              CLUB ADA, WEWORK ALDWYCH HOUSE, 71-91 ALDWYCH, LONDON, WC2B 4HN
              <br />
              <strong>INTERN DEVELOPER AND CHEERLEADER</strong> <br />
              SEPT 2018 – SEPT 2019
            </p>
            <p className="indented-p">
              Exposure to a wide variety of internal and external client
              projects; including both front-end and back-end roles. Gained
              experience of working in various agile development teams.
              Delivered multiple presentations during my time at AND for new
              joiners in bootcamp. I also presented to business stakeholders on
              my client roles. I helped lead the restructuring of the tech
              onboarding plan at one client.
            </p>
          </div>
        </div>
        <div className="section-container">
          <h2>Education</h2>
          <hr />
          <div className="sub-section-container">
            <h3>ABERYSTWYTH UNIVERSITY (ABERYSTWYTH, UK)</h3>
            <h4>SEPT 2015 – JUNE 2020</h4>
            <p className="indented-p">
              <strong>
                BSc Computer Science with Integrated Year in Industry (Inc.
                Foundation Year) <br /> First Class Honours <br /> <br />
                Notable Modules:
              </strong>
            </p>
            <ul className="modules">
              <li>Year in Industry (83%)</li>
              <li>Mobile Development withiOS (80%)</li>
              <li>Software Engineering (74%)</li>
              <li>Major & Minor Project (73%)</li>
              <li>Computational Bioinformatics (71%)</li>
              <li>Modelling Persistent Data (70%)</li>
              <li>Agile Development and Testing (64%)</li>
            </ul>
          </div>

          <div className="sub-section-container">
            <h3>ALDER GRANGE SCHOOL AND SIXTH FORM CENTRE (RAWTENSTALL, UK)</h3>
            <h4>SEPT 2007 – JUNE 2015</h4>
            <p className="indented-p">
              <strong>A Level</strong> – Biology, Chemistry, Computing and
              Mathematics
              <br />
              <strong>AS Level</strong> – Extended Project
              <br />
              <strong>11 GCSES A-C</strong>
            </p>
          </div>
        </div>
        <div className="section-container">
          <h2>Additional Qualifications & Achievements</h2>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>
                  <li>PSM1, Scrum.org</li>
                </td>
                <td>MAR 2021</td>
              </tr>
              <tr>
                <td>
                  <li>Emergency First Aid at Work</li>
                </td>
                <td>SEPT 2019</td>
              </tr>
              <tr>
                <td>
                  <li>Gold Aber Award for Volunteering</li>
                </td>
                <td>JAN 2020</td>
              </tr>
              <tr>
                <td>
                  <li>BGU Cheerleading Coaching Levels 1-3</li>
                </td>
                <td>AUG 2019</td>
              </tr>
              <tr>
                <td>
                  <li>Duke of Edinburgh Bronze, Silver and Gold Awards</li>
                </td>
                <td>FEB 2019</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="section-container">
          <h2>Interests</h2>
          <hr />
          <p>
            Head Coach of AU Tarannau Cheerleading Team 2019-2020. Former coach
            of Alder Grange School’s cheerleading squad the AG CATS, leading
            them to achieve 3 National Titles; this involved organising and
            choreographing a variety of routines for 80 students aged 11-16.
            <br /> <br />
            Avid self-taught amateur baker. I enjoy completing tutorials to
            improve my Craft Bakery, Sugar Craft and Patisserie Craft skills.
          </p>
        </div>
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

        .section-container {
          padding-bottom: 1em;
        }

        .sub-section-container {
          padding-bottom: 0.5em;
        }

        .indented-p {
          padding-left: 2em;
        }

        .modules {
          padding-left: 6em;
        }

        table {
          width: 100%;
        }

        @media (max-width: 600px) {
          .page-content {
            margin-bottom: 140px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
