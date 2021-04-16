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
  Container,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyView = () => {
  const [currencyInfo, setCurrencyInfo] = useState();
  const [baseCurr, setBaseCurr] = useState("SGD");

  useEffect(() => {
    axios.get(`/api/forex?baseCurr=${baseCurr}`).then((response) => {
      setCurrencyInfo(response.data);
      console.log("this runs");
    });
  }, [baseCurr]);

  return (
    <div className="container">
      <div className="row">
        {/* {console.log(currencyInfo)} */}
        {currencyInfo ? (
          Object.keys(currencyInfo).map((currency, i) => {
            return (
              <Button
                variant="light"
                key={currency}
                id="currencyCard"
                className="col-xs-1"
              >
                {currency} - {currencyInfo[`${currency}`].currency_name} -{" "}
                {currencyInfo[`${currency}`].rate},
              </Button>
            );
          })
        ) : (
          <p>Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyView;
