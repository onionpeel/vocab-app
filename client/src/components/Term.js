import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {add} from '../actions/vocabActions';
import uuid from 'uuid/v4';

const Term = ({kanji, kana, english, add}) => {
  const handleOnClick = e => {
    e.preventDefault();
    add({
      kanji,
      kana,
      english
    });
  };

  return (
    <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                  backgroundColor: 'rgb(245, 250, 250)'}}>
      <Card.Body className="align-self-end">
        <Button onClick={handleOnClick}>Add</Button>
      </Card.Body>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Row>
            <h2>{kanji}</h2>
          </Row>
          <Row>
          <p style={{fontSize:"125%"}}>{kana} </p>
          </Row>
          <Row>
            <ol>
              {english.map(def => (
                <li key={uuid()}>
                  <p style={{fontFamily: 'Helvetica', fontSize:"125%"}}>{def.english_definitions.join('; ')}</p>
                </li>
              ))}
            </ol>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Card>
  );
};

const mapDispatchToState = {
  add
};

export default connect(null, mapDispatchToState)(Term);
