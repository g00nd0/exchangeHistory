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
import Pagination from "react-js-pagination";
import SearchBar from "../SearchBar/SearchBar";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
// import Pagination from "./Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyView = () => {
  const [currencyInfo, setCurrencyInfo] = useState();
  const [baseCurr, setBaseCurr] = useState("SGD");
  // const [currencyInfoDisp, setCurrencyInfoDisp] = useState();
  // const currPerPage = 12;
  // const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current todos
  // const indexOfLastCurr = activePage * currPerPage;
  // const indexOfFirstCurr = indexOfLastCurr - currPerPage;
  // const currentCurr = (currInfo) => {
  //   return currInfo.slice(indexOfFirstCurr, indexOfLastCurr);
  // };

  // const handlePageChange = (pageNumber) => {
  //   console.log(`active page is ${pageNumber}`);
  //   setCurrentPage(pageNumber);
  // };

  useEffect(() => {
    axios.get(`/api/forex?baseCurr=${baseCurr}`).then((response) => {
      setCurrencyInfo(response.data);
      console.log("this runs");
    });
  }, [baseCurr]);

  return (
    <div className="container">
      <div className="row">
        {currencyInfo ? (
          Object.keys(currencyInfo).map((currency, i) => {
            return currencyInfo[`${currency}`].rate ? (
              <CurrencyCard
                key={currency}
                currencyInfo={currencyInfo[`${currency}`]}
              />
            ) : (
              <></>
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
