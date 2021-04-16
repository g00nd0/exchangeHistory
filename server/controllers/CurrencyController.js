const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const axios = require("axios").default;
router.use(methodOverride("_method"));

router.get("/", async (req, res) => {
  // get all currencies
  await axios
    .get(
      "https://api.currencyscoop.com/v1/latest?base=SGD&api_key=27530082513705f7bdf5e8478bbf873c"
    )
    .then((response) => {
      res.send(response.data);
    });
});

module.exports = router;
