import React, { useState } from "react";
import "./grid.css";

export const Flag = () => {
  const [flagURL, setFlagURL] = useState('https://countryflagsapi.com/png/china')
  const [query, setQuery] = useState("");

  const fetchItems = () => {
    const url = `https://countryflagsapi.com/svg/`
    setFlagURL(url + query)
  };
  const fetch = () => {
    fetchItems();
  };
  return (
    <>
      <div className="col-sm-4">
        <div className="flag">
          <h3>Search a country :</h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Find a flag..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button className="btn btn-outline-warning" onClick={fetch}>
              Search
            </button>
          </div>
          <img src={flagURL} alt="flag" width="100%" />
        </div>
      </div>
    </>
  );
};

export default Flag;
