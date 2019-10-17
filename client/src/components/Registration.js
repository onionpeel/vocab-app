import React, {useState} from 'react';
import Header from './Header';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions';

const Registration = ({registerUser}) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleOnChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    registerUser(newUser);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mx-auto" style={{marginTop:15}}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleOnChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleOnChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange}/>
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


const mapDispatchToProps = {
  registerUser
};

export default connect(null, mapDispatchToProps)(Registration);
