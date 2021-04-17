import React from "react";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyView = (props) => {
  return (
    <>
      <h1>Selct a currency below</h1>
      <br />
      <div className="container">
        <div className="row">
          {props.currencyInfo ? (
            Object.keys(props.currencyInfo).map((currency, i) => {
              return props.currencyInfo[`${currency}`].rate ? (
                <CurrencyCard
                  key={currency}
                  currencyInfo={props.currencyInfo[`${currency}`]}
                  setReqCurr={props.setReqCurr}
                />
              ) : (
                <></>
              );
            })
          ) : (
            <h2 className="col m-auto">Loading Currencies...</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrencyView;
