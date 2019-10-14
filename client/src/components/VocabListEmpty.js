import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';

const VocabListEmpty = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="pic-item">
          <Image src="assets/dog.jpg" className="mx-auto d-block" roundedCircle fluid />
          <h3 style={{textAlign: 'center'}}>[username], you and your vocab list won't be so lonely once you start adding words</h3>
        </Col>
      </Row>
    </div>
  );
};

export default VocabListEmpty;
