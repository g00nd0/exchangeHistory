import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Col,
  Form,
  FormControl,
  NavDropdown,
  NavbarBrand,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Current-See</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Currencies</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="mr-sm-2">Base</div>
        <SearchBar></SearchBar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
