import React, {useState} from 'react';
import Header from './Header';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';

const Registration = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleOnChange = e => {
    setNewUser({[e.target.name]: e.target.value});
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto" style={{marginTop:15}}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleOnChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Row}>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="submit">Register!</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
