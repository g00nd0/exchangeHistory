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
import Pagination from "react-js-pagination";
// import SearchBar from "../SearchBar/SearchBar";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
// import Pagination from "./Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyView = (props) => {
  const [currencyInfo, setCurrencyInfo] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  // const [baseCurr, setBaseCurr] = useState("USD");
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

  const currList = (obj) => {
    return Object.keys(obj);
  };

  useEffect(() => {
    axios.get(`/api/forex?baseCurr=${props.baseCurr}`).then((response) => {
      setCurrencyInfo(response.data);
    });
  }, [props.baseCurr]);

  return (
    <>
      <h1>Selct a currency below</h1>
      <br />
      <div className="container">
        <div className="row">
          {currencyInfo ? (
            Object.keys(currencyInfo).map((currency, i) => {
              return currencyInfo[`${currency}`].rate ? (
                <CurrencyCard
                  key={currency}
                  currencyInfo={currencyInfo[`${currency}`]}
                  setReqCurr={props.setReqCurr}
                />
              ) : (
                <></>
              );
            })
          ) : (
            <h2 className="col m-auto">Loading Currencies...</h2>
          )}
          {/* {currencyInfo ? props.setCurrList(currList(currencyInfo)) : <></>} */}
          {console.log(props.CurrList)}
        </div>
      </div>
    </>
  );
};

export default CurrencyView;
