import React from "react";
import { Card, Buttons } from "react-bootstrap";
import getSymbolFromCurrency from "currency-symbol-map";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyCard = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <Card style={{ height: "95%", width: "95%" }}>
        <Card.Body>
          <div className="container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="currCode h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              {props.currencyInfo.currency_code}
            </div>
            <div className="px-3 m-auto d-flex flex-column ">
              <span className="currName text-dark d-block font-weight-bold text-align-center">
                {props.currencyInfo.currency_name}
              </span>
              <br />
              <span className="currRate text-primary text-uppercase">
                {props.currencyInfo.rate
                  ? `${
                      Math.round(props.currencyInfo.rate * 100) / 100
                    } ${getSymbolFromCurrency(
                      props.currencyInfo.currency_code
                    )}`
                  : "Data not available"}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CurrencyCard;
