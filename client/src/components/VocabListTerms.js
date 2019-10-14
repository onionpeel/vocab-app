import React from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap';
import VocabListTerm from './VocabListTerm';
import uuid from 'uuid/v4';

const VocabListTerms = ({vocabulary}) => {
  return (
    <div>
      <Row>
        <Col xs={12} style={{textAlign: 'center'}} className="mx-auto">
            <h1>Hey, [username], that's a fine list you have!</h1>
        </Col>
      </Row>
      <Col xs={12} md={6} className="mx-auto">
        <ListGroup variant="flush">
          {vocabulary.map(term => (
            <VocabListTerm
              key={uuid()}
              kanji={term.kanji}
              kana={term.kana}
              english={term.english}
            />
          ))}
        </ListGroup>
      </Col>
    </div>
  );
};

export default VocabListTerms;
