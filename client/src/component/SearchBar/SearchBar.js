import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = (props) => {
  const codeList = (info) => {
    const list = Object.keys(info);
    return (
      <Dropdown.Menu
        style={{
          height: "300px",
          overflowY: "scroll",
          marginLeft: "-80px",
        }}
      >
        {list.map((option, i) => {
          return (
            <Dropdown.Item
              key={list[i]}
              onClick={() => {
                handleClick(list[i]);
              }}
            >
              {list[i]}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    );
  };

  const handleClick = (selectedItem) => {
    setSelectedOption(selectedItem);
    localStorage.setItem("baseCurr", selectedItem);
    props.setBaseCurr(selectedItem);
  };

  const [selectedOption, setSelectedOption] = useState(props.baseCurr);

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
