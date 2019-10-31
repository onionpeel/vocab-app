import React from 'react';
import {Card, Row, Col, Button, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {add} from '../actions/vocabActions';
import uuid from 'uuid/v4';

const Term = ({kanji, kana, english, add, isAuthenticated, list}) => {
  const handleOnClick = e => {
    e.preventDefault();
    add({
      kanji,
      kana,
      english
    });
  };

  const displayStatus = (kanji, kana, list) => {
    if (isAuthenticated) {
      if (list.some(term => term.kanji === kanji)) {
        return (
          <Row style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: "#14a6db",
              fontSize: "120%"
             }}>
            <>{"\u2713 Added!"}</>
          </Row>
        );
      } else if (list.some(term => term.kana === kana)) {
          return (
            <Row style={{
                display: 'flex',
                justifyContent: 'flex-end',
                color: "#14a6db",
                fontSize: "120%"
               }}>
              <>{"\u2713 Added!"}</>
            </Row>
          );
      } else {
        return (
          <Row style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={handleOnClick}>Add</Button>
          </Row>
        );
      }
    };
  };

  return (
    <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                  backgroundColor: 'rgb(245, 250, 250)'}}>

      <Container>
        {displayStatus(kanji, kana, list)}
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
      </Container>
    </Card>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,
  list: state.vocabulary.list
});

const mapDispatchToState = {
  add
};

export default connect(mapStateToProps, mapDispatchToState)(Term);
