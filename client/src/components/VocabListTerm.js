import React from 'react';
import {Card, Row, Col, Button, Container} from 'react-bootstrap';
import uuid from 'uuid/v4';

const VocabListTerm = ({kanji, kana, english}) => (
  <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                backgroundColor: 'rgb(245, 250, 250)'}}>
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <p style={{fontSize:"200%"}}>{kanji}</p>
            <p style={{fontSize:"125%", paddingTop:15}}>{kana}</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={1} style={{paddingTop:5}}>
        </Col>
        <Col>
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
      </Row>
      <Row xs={12} md={2} style={{marginTop: 'auto', display: "flex", justifyContent: "flex-end"}}>
        <Button>
          Delete
        </Button>
      </Row>
    </Container>
  </Card>
);

export default VocabListTerm;
