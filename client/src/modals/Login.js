import React, {useState} from 'react';
import {Modal, Button, Form, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import {login} from '../actions/authActions';
import PropTypes from 'prop-types';
import {clearError} from '../actions/errorActions';

const Login = ({onHide, show, isLoading, login, errorStatus, errors: {errorMessage}, clearError}) => {
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

  const handleOnSubmit = async e => {
    e.preventDefault();
    await clearError();
    setUser({
      ...user,
      password: ''
    });
    await login(user);
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
          <Spinner isLoading={isLoading}/>
          {errorStatus && <Alert style={{textAlign:'center', backgroundColor:'#ebeded'}}>{errorMessage.msg}</Alert>}
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
  errors: PropTypes.object,
  errorStatus: PropTypes.bool,
  clearError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.authenticate.isLoading,
  errors: state.errors,
  errorStatus: state.errors.errorStatus
});

const mapDispatchToProps = {
  login,
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
