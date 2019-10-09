import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">The Sumo Diaper Rash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Dictionary</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
