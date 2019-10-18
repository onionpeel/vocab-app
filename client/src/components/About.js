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
        <Row style={{marginTop: 10}}>
          <Col xs={12} md={8}>
            <Image src="assets/donutCropped.jpg" className="about-profile-pic img-fluid" rounded />
            <p>Don't mistake us for the Q-tip siblings</p>
            <p>An exotic appearance is only as far away as the supermarket cooking aisle.  Beauty isn't skin deep.  It is as deep as an artificial sweetener.  Just look at us.  Underneath we have the skin of elderly lizards</p>
            <p>The power of your inner pastry is waiting to be unleashed.</p>
          </Col>
          <Col>
            <p>Remember that no makeover is complete without visiting the <a style={{color: '#2892D7'}} href="https://github.com/onionpeel/vocab-app">source code</a></p>

          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;
