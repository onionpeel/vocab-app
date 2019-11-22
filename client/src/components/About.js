import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src="assets/geishaCropped.jpg" alt="geisha" className="image-main" fluid/>
            <h3 className="image-title">The Powdered Donut Sisters</h3>
          </Col>
        </Row>
        <Row style={{marginTop: 10, marginBottom: 10}}>
          <Col xs={12} md={8}>
            <Image src="assets/donutCropped.jpg" className="about-profile-pic img-fluid" rounded />
            <p>Don't mistake us for the Q-tip siblings</p>
            <p>An exotic appearance is only as far away as the supermarket cooking aisle.  Beauty isn't skin deep.  It is as deep as an artificial sweetener.  Just look at us.  Underneath we have the skin of elderly lizards</p>
            <p>The power of your inner pastry is waiting to be unleashed.</p>
          </Col>
          <Col>
            <p><b>Okay, the truth is that this website has nothing to do with the powdered donut sisters (even though they are a wonderful trio).</b></p>
            <p><b>Actually, this is a whimsical site demonstrating serious full stack tech.</b></p>
            <p><b>Remember that no makeover is complete without visiting the <a style={{color: '#2892D7'}} href="https://github.com/onionpeel/vocab-app">source code</a>.</b></p>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                        backgroundColor: 'rgb(245, 250, 250)'}} className="features">
            <h3>Features of the Sumo Diaper Rash</h3>
            <ul>
              <li>The frontend is built with React, Redux, Bootstrap and React-Bootstrap</li>
              <li>React-Router handles the client-side routing</li>
              <li>User input is stored in a MongoDB database, using Mongoose to model the data</li>
              <li>Dictionary searches are cached using Redis</li>
              <li>The backend runs on an Express server</li>
              <li>Express-Validator validates form input</li>
              <li>bcryptjs encrypts passwords</li>
              <li>JSON web tokens are used to maintain a user's activity in local storage</li>
              <li>Asynchronous calls are made using Axios</li>
              <li>Project configurations are organized through the npm package, config</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;
