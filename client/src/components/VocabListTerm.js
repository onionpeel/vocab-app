import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const VocabListTerm = ({kanji, kana, english}) => (
    <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                  backgroundColor: 'rgb(245, 250, 250)'}}>
      <Row>
        <Col xs={12} md={2}>
          <h2>{kanji}</h2>
        </Col>
        <Col xs={12} md={7} style={{paddingTop:8}}>
          <p style={{fontSize:"125%"}}>{kana}</p>
          {english}
        </Col>
        <Col xs={12} md={2} style={{marginTop: 'auto', marginBottom: 'auto'}}>
          <Button>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
);

export default VocabListTerm;
