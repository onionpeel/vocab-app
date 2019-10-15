import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import uuid from 'uuid/v4';

const Term = ({resultWord, resultReading, meaning}) => {
  //const handleOnClick = () => {
//     submitTerm({
//       kanji: resultWord,
//       kana: resultReading,
//       english: meaning
//     });
//  };

  // action that defines submitTerm:
  // export const submitTerm = term => async (dispatch, getState) => {
  //   try {
  //     const res = await axios.post('api/vocab', term, TOKENCONFIG(getState));
  //     dispatch({
  //       type: XXXXXXXXXXX,
  //       action: res.data
  //     });
  //   } catch (err) {
  //     dispatch(XXXXXXXXXXXXXXXXXX);
  //   };
  // };

  return (
    <Card style={{marginBottom: 10, padding: 10, boxShadow: "1px 2px 5px grey",
                  backgroundColor: 'rgb(245, 250, 250)'}}>
      <Card.Body className="align-self-end">
        <Button>Add</Button>
      </Card.Body>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Row>
            <h2>{resultWord}</h2>
          </Row>
          <Row>
          <p style={{fontSize:"125%"}}>{resultReading} </p>
          </Row>
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
        <Col xs={1}></Col>
      </Row>
    </Card>
  );
};

export default Term;
