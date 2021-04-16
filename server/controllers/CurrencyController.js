require("dotenv").config();
const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const axios = require("axios").default;
router.use(methodOverride("_method"));

const api_key = process.env.API_KEY;
const url = "https://api.currencyscoop.com/v1/";

router.get("/", async (req, res) => {
  // get all currencies
  await axios
    .get(`${url}latest?base=SGD&api_key=${api_key}`)
    .then((response) => {
      res.send(response.data);
    });
});

router.get("/:reqCurr", async (req, res) => {
  //get one currency

  await axios
    .all([
      await axios.get(
        `${url}latest?base=SGD&symbols=${req.params.reqCurr}&api_key=${api_key}`
      ),
      await axios.get(`${url}currencies?type=fiat&api_key=${api_key}`),
    ])
    .then(
      axios.spread((...responses) => {
        // const reqCurrency = req.params.reqCurr
        const currencyVal = responses[0].data.response;
        const currencyInfo =
          responses[1].data.response.fiats[req.params.reqCurr.toUpperCase()];

        res.send({ val: currencyVal, info: currencyInfo });
      })
    );
});

router.get("/:reqCurr/history", async (req, res) => {
  //get hisotry of specified currency (only for three days for now)
  const timePeriod = 14; // cant display for last 3 days, seems like its because its too soon and data is unavailable, so choose between last 7 and last 14 days

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
      `${url}historical?base=SGD&symbols=${req.params.reqCurr}&date=${inputDate}&api_key=${api_key}`
    );
  };

  for (let i = 0; i < timePeriod; i++) {
    axiosList.push(axiosCmd(date(i)));
  }

  await axios.all(axiosList).then(
    axios.spread((...responses) => {
      res.send(
        responses.map((oneCurrency) => {
          return oneCurrency.data.response;
        })
      );
    })
  );
});

module.exports = router;
