import React from 'react';
import {Card, Row, Col, Button, Container} from 'react-bootstrap';
import uuid from 'uuid/v4';

const VocabListTerm = ({kanji, kana, english}) => (
  <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                backgroundColor: 'rgb(245, 250, 250)'}}>
    <Container>
      <Row>
        <Col xs={12} md={2}>
          <h2>{kanji}</h2>
        </Col>
        <Col xs={12} md={7} style={{paddingTop:8}}>
          <p style={{fontSize:"125%"}}>{kana}</p>
          <ol>
            {english.map(def => {
              return (
                <li key={uuid()}>
                  <p style={{fontFamily: 'Helvetica', fontSize:"125%"}}>{def.english_definitions.join('; ')}</p>
                </li>
              )
            })}
          </ol>
        </Col>
        <Col  xs={12} md={1}>
          <br/>
        </Col>
        <Col xs={12} md={2} style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <Button>
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default VocabListTerm;
