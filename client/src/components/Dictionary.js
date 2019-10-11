import React, {useEffect, useState} from 'react';
import {Container, Col, Row, Form, Button, Image, ListGroup} from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';

const Dictionary = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios({
      //   method: 'post',
      //   url: '/api/vocab/term',
      //   data: {
      //     term: 'house'
      //   }
      // });
      // setTerms(response);

      const response = await axios.get('/api/vocab/term');
      setTerms(response);
      console.log(response)
    };
    fetchData();
  }, [terms]);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <div>
              <Form className="mt-2">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Find that Japanese word you've always longed for</Form.Label>
                  <Form.Control type="text" placeholder="What's taking you so long?"/>
                  <Form.Text className="text-muted">
                    Life fulfillment is a click away.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginBottom: 10}}>
                  Search
                </Button>
              </Form>
            </div>

          </Col>
          <Col xs={12} sm={4} className="sidebar-section">
            <Image src='assets/bookstoreCropped.jpg' className="img-fluid" rounded/>
            <p>I've lived here my whole life and still can't read this stuff.  I wish I had a convenient tool for looking up the meaning of these words.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dictionary;
