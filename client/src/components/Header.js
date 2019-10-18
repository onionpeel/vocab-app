import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import Login from '../modals/Login';
import {connect} from 'react-redux';

const Header = ({authenticate: {user}}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">The Sumo Diaper Rash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link eventKey="disabled" disabled style={{color: 'white'}}>
              {user && user.name}
            </Nav.Link>
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

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

export default connect(mapStateToProps)(Header);
