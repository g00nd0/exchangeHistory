import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = (props) => {
  const codeList = (info) => {
    const list = Object.keys(info);
    return (
      <Dropdown.Menu
        style={{
          height: "300px",
          "overflow-y": "scroll",
          "margin-left": "-80px",
        }}
      >
        {list.map((option, i) => {
          return <Dropdown.Item>{list[i]}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    );
  };

  // const options = codeList().map((option) => {
  //   return { value: option, label: option };
  // });
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const [selectedOption, setSelectedOption] = useState(props.baseCurr);

  // const handleCurrencyChoice = (choice) => {
  //   setSelectedOption(options[choice]);
  // };

  return (
    <>
      {props.currencyInfo ? (
        <Dropdown title="dropdown for base currency">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedOption}
          </Dropdown.Toggle>
          {codeList(props.currencyInfo)}
        </Dropdown>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SearchBar;
