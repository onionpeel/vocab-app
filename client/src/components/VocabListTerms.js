import React from 'react';
import {ListGroup, Row, Col, Container, Alert} from 'react-bootstrap';
import VocabListTerm from './VocabListTerm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const VocabListTerms = ({vocabulary, name}) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} style={{textAlign: 'center'}} className="mx-auto">
          <Alert style={{backgroundColor: 'rgb(196, 233, 245)'}}>
            <h4>Hey, {name}, that's a fine list you have!</h4>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <ListGroup variant="flush">
            {vocabulary.map(term => (
              <VocabListTerm
                key={term._id}
                id={term._id}
                kanji={term.kanji}
                kana={term.kana}
                english={term.english}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

VocabListTerms.propTypes = {
  vocabulary: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  name: state.authenticate.user.name
});

export default connect(mapStateToProps)(VocabListTerms);
