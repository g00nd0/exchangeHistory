import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyCard = (props) => {
  const handleClick = (currCode) => {
    props.setReqCurr(currCode);
  };

  return (
    <Link
      title="linkToCurrency"
      to={`/${props.currencyInfo.currency_code}`}
      className="col-sm-6 col-md-4"
      onClick={() => {
        handleClick(props.currencyInfo.currency_code);
      }}
    >
      <Card title="cardTitle" style={{ height: "95%", width: "95%" }}>
        <Card.Body title="cardBodyContainer">
          <div
            title="innerBodyContainer"
            className="container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light"
          >
            <div
              title="currencyCode"
              className="currCode h-100 position-relative border-gray border-right px-2 bg-white rounded-left"
            >
              {props.currencyInfo.currency_code}
            </div>
            <div
              title="currencyInfo"
              className="px-3 m-auto d-flex flex-column "
            >
              <span
                title="currencyName"
                className="currName text-dark d-block font-weight-bold text-align-center"
              >
                {props.currencyInfo.currency_name}
              </span>
              <br />
              <span
                title="currencyRate"
                className="currRate text-primary text-uppercase"
              >
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
    </Link>
  );
};

export default CurrencyCard;
