require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(jsonParser);

const CurrencyController = require("./controllers/CurrencyController");
app.use("/api/forex", CurrencyController);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
