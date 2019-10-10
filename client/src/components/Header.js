import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import Login from '../modals/Login';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">The Sumo Diaper Rash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Dictionary</Nav.Link>
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

export default Header;
