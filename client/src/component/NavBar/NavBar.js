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

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Current-See</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Currencies</Nav.Link>
        </Nav>
        <div className="mr-sm-2">Base Currency</div>
        <SearchBar
          currencyInfo={props.currencyInfo}
          baseCurr={props.baseCurr}
          setBaseCurr={props.setBaseCurr}
        />

        {console.log(props.currencyInfo)}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
