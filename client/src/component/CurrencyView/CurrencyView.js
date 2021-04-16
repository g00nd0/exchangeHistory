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
      setCurrencyInfo(response.data.response);
    });
  }, [baseCurr]);

  return (
    <div className="container">
      <div className="row">
        {currencyInfo ? (
          Object.keys(currencyInfo.rates).map((currency, i) => {
            return (
              <div key={currency} id="currencyCard" className="col-xs-1">
                {currencyInfo.rates[currency]} - {currency},
              </div>
            );
          })
        ) : (
          <p>data loading</p>
        )}
        {/* {console.log(currencyInfo)} */}
        {/* {this.state.films.map(film => (
      <div key={film.id} id='cardItem' className="col-xs-1">
        <MovieCard film={film} />
      </div>
    ))} */}
      </div>
    </div>
  );
};

export default CurrencyView;
