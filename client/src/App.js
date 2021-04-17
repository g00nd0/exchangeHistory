import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./component/NavBar/NavBar";
import CurrencyView from "./component/CurrencyView/CurrencyView";
import CurrencyViewOne from "./component/CurrencyView/ViewOne/CurrencyViewOne";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

localStorage.setItem("baseCurr", "USD");

function App() {
  const [baseCurr, setBaseCurr] = useState(localStorage.getItem("baseCurr"));
  const [reqCurr, setReqCurr] = useState("");
  const [currencyInfo, setCurrencyInfo] = useState();

  useEffect(() => {
    axios.get(`/api/forex?baseCurr=${baseCurr}`).then((response) => {
      setCurrencyInfo(response.data);
    });
  }, [baseCurr, localStorage.getItem("baseCurr")]);

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
              currencyInfo={currencyInfo}
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
