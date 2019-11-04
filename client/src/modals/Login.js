import React, {useState} from 'react';
import {Modal, Button, Form, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import IsLoadingAlert from '../components/IsLoadingAlert';
import {login} from '../actions/authActions';
import PropTypes from 'prop-types';

const Login = ({onHide, show, isLoading, login, error: {message}}) => {
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

Login.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  login: PropTypes.func.isRequired,
  error: PropTypes.object,
  message: PropTypes.string
};

const mapStateToProps = state => ({
  isLoading: state.authenticate.isLoading,
  error: state.errors
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
