import React from "react";

const SearchResults = props => {
  return (
    <li>
      <button onClick={() => props.getWeatherResults(props.result)}>
        <span>{props.result.name}, </span>
        <span>{props.result.state}</span>
      </button>
    </li>
  );
};

export default SearchResults;
