import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./component/NavBar/NavBar";
import CurrencyView from "./component/CurrencyView/CurrencyView";
import CurrencyViewOne from "./component/CurrencyView/ViewOne/CurrencyViewOne";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

function App() {
  const [baseCurr, setBaseCurr] = useState("USD");
  const [reqCurr, setReqCurr] = useState("");
  const [currencyInfo, setCurrencyInfo] = useState();

  useEffect(() => {
    axios.get(`/api/forex?baseCurr=${baseCurr}`).then((response) => {
      setCurrencyInfo(response.data);
      console.log("app.s");
    });
  }, [baseCurr]);

  return (
    <div title="Current-See App" className="App">
      <NavBar
        baseCurr={baseCurr}
        setBaseCurr={setBaseCurr}
        currencyInfo={currencyInfo}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <CurrencyView
              baseCurr={baseCurr}
              setBaseCurr={setBaseCurr}
              setReqCurr={setReqCurr}
            />
          </Route>
          <Route exact path="/:reqCurr">
            <CurrencyViewOne baseCurr={baseCurr} reqCurr={reqCurr} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
