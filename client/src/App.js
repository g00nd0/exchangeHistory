import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import CurrencyView from "./component/CurrencyView/CurrencyView";

function App() {
  return (
    <div title="Current-See App" className="App">
      <NavBar></NavBar>
      <CurrencyView />
    </div>
  );
}

export default App;
