import React from 'react';
import {Container, Row, Col, Alert} from 'react-bootstrap';

const PaginateNoMatch = () => (
  <Container>
    <Row>
      <Col style={{textAlign: 'center'}} className="mx-auto">
        <Alert style={{backgroundColor: 'rgb(196, 233, 245)'}}>
          <h5>Nothing was found.  But don't worry your life still has meaning and you can try another search</h5>
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default PaginateNoMatch;
