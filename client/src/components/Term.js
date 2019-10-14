import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import uuid from 'uuid/v4';

const Term = ({resultWord, resultReading, meaning}) => (
    <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                  backgroundColor: 'rgb(245, 250, 250)'}}>
      <Row>
        <Col xs={12} md={3}>
          <h2>{resultWord}</h2>
        </Col>
        <Col xs={12} md={9} style={{paddingTop:8}}>
          <p style={{fontSize:"125%"}}>{resultReading}</p>
          <Row>
            <ol>
              {meaning.map(def => (
                <li key={uuid()}>
                  <p style={{fontFamily: 'Helvetica', fontSize:"125%"}}>{def.english_definitions.join('; ')}</p>
                </li>
              ))}
            </ol>
          </Row>
        </Col>
      </Row>
    </Card>
);

export default Term;
