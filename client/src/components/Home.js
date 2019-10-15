import React from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
      <div>
        <Container>
          <Jumbotron className="jumbo-img">
            <h2>Prepare yourself for an eclipse of the rising sun</h2>
            <br />
            <h5>ハローキティが好き？</h5>
            <h5>いえ、口がない猫は可笑しい。ゴジラは一番だ！</h5>
          </Jumbotron>
          <Row className="text-center">
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/fushimiinariCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Fushimi Inari</h3>
              <p>"It's the one with the orange top and black base"</p>
            </Col>
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/rockgardenCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Rock Garden</h3>
              <p>The person who lives in a house with paper windows should not throw stones</p>
            </Col>
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/shrineCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Temple Entrance</h3>
              <p>"No, I clearly said fluorescent pink.  Who the hell would ever paint this thing red?"</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
};

export default Home;
