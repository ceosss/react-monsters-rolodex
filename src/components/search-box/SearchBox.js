import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <input
      className="search"
      onChange={props.handleChange}
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default SearchBox;
