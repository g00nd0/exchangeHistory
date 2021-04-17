require("dotenv").config();
const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const axios = require("axios").default;
const { StatusCodes } = require("http-status-codes");
router.use(methodOverride("_method"));

const api_key = process.env.API_KEY;
const url = "https://api.currencyscoop.com/v1/";

router.get("/", async (req, res) => {
  // get all currencies
  //   console.log(req.query);
  await axios
    .all([
      await axios.get(`${url}latest?base=SGD&api_key=${api_key}`),
      await axios.get(`${url}currencies?type=fiat&api_key=${api_key}`),
    ])
    .then(
      axios.spread((...responses) => {
        const currencyVal = responses[0].data.response.rates;
        const currencyInfo = responses[1].data.response.fiats;
        for (const prop in currencyInfo) {
          const currency = currencyInfo[`${prop}`];
          currency.rate = currencyVal[prop];
        }
        if (currencyInfo) {
          res.status(StatusCodes.OK).send(currencyInfo);
        } else {
          res.status(StatusCodes.NOT_FOUND).send("Error, no such currency");
        }
      })
    )
    .catch((error) => {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    });
});

router.get("/:reqCurr", async (req, res) => {
  //get one currency

  await axios
    .all([
      await axios.get(
        `${url}latest?base=${req.query.baseCurr}&symbols=${req.params.reqCurr}&api_key=${api_key}`
      ),
      await axios.get(`${url}currencies?type=fiat&api_key=${api_key}`),
    ])
    .then(
      axios.spread((...responses) => {
        // const reqCurrency = req.params.reqCurr

        const currencyVal = responses[0].data.response;
        const currencyInfo =
          responses[1].data.response.fiats[req.params.reqCurr.toUpperCase()];

        if (currencyInfo) {
          res
            .status(StatusCodes.OK)
            .send({ val: currencyVal, info: currencyInfo });
        } else {
          res.status(StatusCodes.NOT_FOUND).send("Error, no such currency");
        }
      })
    )
    .catch((error) => {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    });
});

router.get("/:reqCurr/history", async (req, res) => {
  // ideally, this implementation should use the "timeseries" parameter specified in currencyscoop's documentation, but this requires a paid subscription
  //get hisotry of specified currency (only for three days for now)
  const timePeriod = 7; // cant display for last 3 days depending on requested currency, seems like its because its too soon and data is unavailable

  let axiosList = new Array();

  const today = new Date(Date.now());
  const month = (month) => {
    month = month + 1;
    if (month.toString().length < 2) {
      return `0${month}`;
    }
    return `${month}`;
  };

  const day = (day) => {
    if (day.toString().length < 2) {
      return `0${day}`;
    }
    return `${day}`;
  };

  const date = (i) => {
    return `${today.getFullYear()}-${month(today.getMonth())}-${day(
      today.getDate() - i
    )}}`;
  };

  const axiosCmd = (inputDate) => {
    return axios.get(
      `${url}historical?base=${req.body.baseCurr}&symbols=${req.params.reqCurr}&date=${inputDate}&api_key=${api_key}`
    );
  };

  for (let i = 0; i < timePeriod; i++) {
    axiosList.push(axiosCmd(date(i)));
  }

  await axios
    .all(axiosList)
    .then(
      axios.spread((...responses) => {
        res.status(StatusCodes.OK).send(
          responses.map((oneCurrency) => {
            return oneCurrency.data.response;
          })
        );
      })
    )
    .catch((error) => {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    });
});

module.exports = router;
