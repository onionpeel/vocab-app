import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import japangeles from '../images/japangeles.jpg';

const NoMatch = () => {
  return (
    <div>
      <Row>
        <Col xs={9} className="pic-item mx-auto">
          <Image src={japangeles} className="mx-auto d-block" roundedCircle fluid />
          <h3 style={{textAlign: 'center'}}>Hmmmm...things have gotten a little messed up.  Let's try a more familiar
            <span> </span>
              <Link to="/" style={{color: 'blue'}}>
                page
              </Link>
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default NoMatch;
