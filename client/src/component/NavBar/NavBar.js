import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  return (
    <Navbar title="navbar" bg="light" expand="lg">
      <Navbar.Brand href="/">Current-See</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Currencies</Nav.Link>
        </Nav>
        <div className="mr-sm-2">Base Currency</div>
        <SearchBar
          title="searchBar"
          currencyInfo={props.currencyInfo}
          baseCurr={props.baseCurr}
          setBaseCurr={props.setBaseCurr}
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
