import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './About.css';
import Header from './Header';

const About = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Image src="assets/geishaCropped.jpg" alt="geisha" className="image-main"/>
            <h3 className="image-title">The Powdered Donut Sisters</h3>
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <Image src="assets/donutCropped.jpg" className="about-profile-pic img-fluid" rounded />
            <p>Don't mistake us for the Q-tip siblings</p>
            <p>An exotic appearance is only as far away as the supermarket cooking aisle.  Beauty isn't skin deep.  It is as deep as an artificial sweetener.  Just look at us.  Underneath we have the skin of elderly lizards</p>
            <p>The power of your inner pastry is waiting to be unleashed.</p>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;

// <div>
//   <Image src="assets/geishaCropped.jpg" className="header-image" />
//   <Container>
//     <Col xs={12} sm={7}>
//       <Image src="assets/donutCropped.jpg" className="about-profile-pic img-fluid" rounded />
//       <h3>Powdered Donut Sisters</h3>
//       <p>An exotic appearance is only as far away as the supermarket cooking aisle.  Just look at us.  We have the skin of elderly lizards</p>
//       <p>Don't mistake us for used Q-tips</p>
//       <p>Beauty isn't skin deep.  It is as deep as an artificial sweetener.  The power of your inner pastry is waiting to be unleashed.</p>
//     </Col>
//   </Container>
// </div>
