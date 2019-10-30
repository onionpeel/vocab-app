import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const VocabListEmpty = ({name}) => {
  return (
    <div>
      <Row>
        <Col xs={12} className="pic-item">
          <Image src="assets/dog.jpg" className="mx-auto d-block" roundedCircle fluid />
          <h3 style={{textAlign: 'center'}}>{name}, you and your vocab list won't be so lonely once you start
            <span> </span>
              <Link to="/dictionary" style={{color: 'blue'}}>
                adding words
              </Link>
          </h3>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.authenticate.user.name
});

export default connect(mapStateToProps)(VocabListEmpty);
