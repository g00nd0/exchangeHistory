import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchBar = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleCurrencyChoice = (choice) => {
    setSelectedOption(options[choice]);
  };

  return (
    <Dropdown title="dropdown for base currency">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedOption.value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{options[0].value}</Dropdown.Item>
        <Dropdown.Item>{options[1].value}</Dropdown.Item>
        <Dropdown.Item>{options[2].value}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
