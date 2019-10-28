import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import IsLoadingAlert from '../components/IsLoadingAlert';
import {login} from '../actions/authActions';

const Login = ({onHide, show, isLoading, login}) => {
  const [user, setUser] = useState({
    password: '',
    email: ''
  });

  const handleOnChange = e => {
    const newUser = {
      ...user,
      [e.target.name]: e.target.value
    };
    setUser(newUser);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    login(user);
  };

  const loadAlert = () => {
    return (isLoading && <IsLoadingAlert />);
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
                If you haven't signed up, you can do that<span> </span>
              <Link to="/registration" style={{color: 'blue'}} onClick={onHide}>
                here
              </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadAlert()}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleOnChange}
              />
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

const mapStateToProps = state => ({
  isLoading: state.authenticate.isLoading
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
