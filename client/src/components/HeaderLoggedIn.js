import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import {logout} from '../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const HeaderLoggedIn = ({authenticate: {user}, logout}) => {
  const handleOnClick = e => {
    logout();
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">The Sumo Diaper Rash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/vocablist">{user.name}'s vocab list</Nav.Link>
          <Nav.Link href="/dictionary">Dictionary</Nav.Link>
          <Nav.Link variant="link" href="/" onClick={handleOnClick}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

HeaderLoggedIn.propTypes = {
  logout: PropTypes.func.isRequired,
  authenticate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

const mapDispathToProps = {
  logout
};

export default connect(mapStateToProps, mapDispathToProps)(HeaderLoggedIn);
