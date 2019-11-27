import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import Login from '../modals/Login';
import {clearError} from '../actions/errorActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const HeaderLoggedOut = ({clearError}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    clearError();
  };

  const handleShow = () => {
    setShow(true);
    clearError();
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">The Sumo Diaper Rash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/dictionary">Dictionary</Nav.Link>
          <Nav>
            <Nav.Link variant="link" onClick={handleShow}>Login</Nav.Link>
            <Login
              show={show}
              onHide={handleClose}
            />
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

HeaderLoggedOut.propTypes = {
  clearError: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  clearError
};

export default connect(null, mapDispatchToProps)(HeaderLoggedOut);
