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
    .get(
      `${url}latest?base=SGD&symbols=${req.params.reqCurr}&api_key=${api_key}`
    )
    .then((response) => {
      res.send(response.data);
    });
});

router.get("/:reqCurr/history", async (req, res) => {
  //get hisotry of specified currency (only for three days for now)
  await axios
    .all([
      axios.get(
        `${url}historical?base=SGD&symbols=${req.params.reqCurr}&date=2020-04-15&api_key=${api_key}`
      ),
      axios.get(
        `${url}historical?base=SGD&symbols=${req.params.reqCurr}&date=2020-04-16&api_key=${api_key}`
      ),
      axios.get(
        `${url}historical?base=SGD&symbols=${req.params.reqCurr}&date=2020-04-17&api_key=${api_key}`
      ),
    ])
    .then(
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
