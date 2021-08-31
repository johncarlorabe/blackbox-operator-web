import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Navbar, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap';
import { FaUserCircle,FaLock,FaSignOutAlt } from "react-icons/fa";
import SearchBar from "../Forms/SearchBar";

function NavigationBar(props) {
  return (
    <Navbar className="py-3" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="px-0" fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <SearchBar />
          </Nav>
          <Nav>
            <NavDropdown align="end" alignRight align="end" title="ADMIN USER" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><FaUserCircle /> My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><FaLock /> Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><FaSignOutAlt /> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(NavigationBar);