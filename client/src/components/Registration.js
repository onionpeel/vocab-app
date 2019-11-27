import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Container, Col, Row, Button, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {registerUser} from '../actions/authActions';
import Spinner from './Spinner';
import {clearError} from '../actions/errorActions';
import PropTypes from 'prop-types';

const Registration = ({registerUser, isAuthenticated, isLoading, errorStatus, errors: {errorMessage}, clearError}) => {
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

  const handleOnSubmit = async e => {
    e.preventDefault();
    await clearError();
    setNewUser({
      ...newUser,
      password: ''
    });
    await registerUser(newUser);
  };

  const renderRedirect = () => {
    return (isAuthenticated && <Redirect to="/vocablist" />);
  };

  return (
    <div>
      <Container>
        {renderRedirect()}
        <Spinner isLoading={isLoading} />
        {errorStatus && <Alert style={{textAlign:'center', backgroundColor:'#ebeded'}}>{errorMessage.msg}</Alert>}
        <Row>
          <Col xs={12} md={6} className="mx-auto" style={{marginTop:15}}>
            <Alert style={{backgroundColor: 'rgb(196, 233, 245)'}}>
              This is a development app, so use a fake email (but remember your password so you can sign in again).
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mx-auto" style={{marginTop:15}}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleOnChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleOnChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={handleOnChange}/>
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

Registration.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.object,
  errorStatus: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticate.isAuthenticated,
  isLoading: state.authenticate.isLoading,
  errors: state.errors,
  errorStatus: state.errors.errorStatus
});

const mapDispatchToProps = {
  registerUser,
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
