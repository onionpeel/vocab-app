import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto" style={{marginTop: 15}}>
              <div style={{marginBottom: 15}}>
                  If you haven't signed up, you can do that<span> </span>
                <Link to="/registration" style={{color: 'blue'}}>
                  here
                </Link>
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
