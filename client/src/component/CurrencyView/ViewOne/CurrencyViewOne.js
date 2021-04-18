import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrencyViewOne = (props) => {
  const [reqCurrInfo, setReqCurrInfo] = useState();
  const [historyLength, setHistoryLength] = useState(1);

  const handleClick = (num) => {
    setHistoryLength(num);
  };

  const getInfo = async (reqCurr, baseCurr) => {
    await axios
      .all([
        axios.get(`/api/forex/${reqCurr}?baseCurr=${baseCurr}`),
        axios.get(`/api/forex/${reqCurr}/history?baseCurr=${baseCurr}`),
      ])
      .then(
        axios.spread((...responses) => {
          const responseData = {
            info: responses[0].data,
            history: responses[1].data,
          };
          responseData.history[0].rates[reqCurr] =
            responseData.info.val.rates[reqCurr];
          setReqCurrInfo(responseData);
        })
      );
  };

  useEffect(() => {
    getInfo(props.reqCurr, props.baseCurr);
  }, [props.reqCurr, props.baseCurr]);

  return (
    <div title="viewOneMain">
      {reqCurrInfo ? (
        <>
          <h1 title="currencyCode">{reqCurrInfo.info.info.currency_code}</h1>
          <h2 title="currencyName">{reqCurrInfo.info.info.currency_name}</h2>
          <Button
            title="getToday"
            onClick={() => {
              handleClick(1);
            }}
          >
            Today
          </Button>
          <Button
            title="get3Days"
            onClick={() => {
              handleClick(3);
            }}
          >
            Last 3 Days
          </Button>
          <Button
            title="get7Days"
            onClick={() => {
              handleClick(7);
            }}
          >
            Last 7 Days
          </Button>
          <Table
            title="currencyTable"
            striped
            bordered
            hover
            variant="light"
            style={{
              width: "90%",
              margin: "10px auto",
              boxShadow: "5px 5px 15px #cdeac0",
            }}
          >
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Date</th>
                <th style={{ width: "50%" }}>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {reqCurrInfo ? (
                reqCurrInfo.history
                  .slice(0, historyLength)
                  .map((currencyInfo) => {
                    return (
                      <tr>
                        <td>{currencyInfo.date}</td>
                        <td>
                          {Math.round(
                            currencyInfo.rates[`${props.reqCurr}`] * 100
                          ) / 100}{" "}
                          {getSymbolFromCurrency(props.reqCurr)}
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <></>
              )}
            </tbody>
          </Table>
        </>
      ) : (
        <p>Loading Currency Data for {props.reqCurr}...</p>
      )}
    </div>
  );
};

export default CurrencyViewOne;
