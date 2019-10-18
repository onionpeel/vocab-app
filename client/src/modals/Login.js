import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = ({onHide, show}) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            If you haven't signed up, you can do that<span> </span>
            <Link to="/registration">
              <Button variant="secondary" onClick={onHide}>here</Button>
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
