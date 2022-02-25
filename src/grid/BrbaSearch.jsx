import React, { useState } from "react";
import axios from "axios";
import "./grid.css";

export const BrbaSearch = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const fetchItems = async () => {
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    setItems(result.data);
  };

  const onChange = (e) => {
    setQuery(e);
    fetchItems();
  };
  const fetch = () => {
    fetchItems();
  };
  return (
    <>
      <div className="col-sm-4">
        <div className="brba">
          <h3>Search a BrBa character :</h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search a character..."
              onChange={(e) => onChange(e.target.value)}
              value={query}
            />
            <button className="btn btn-outline-warning" onClick={fetch}>
              Search
            </button>
          </div>
          {items.map((item) => (
            <React.Fragment key={item.char_id}>
              <div className="card" >
                <img src={item.img} className="card-img-top" alt="Character" />
                <div className="card-body">
                  <h5 className="card-title"><span className="text-dark">{item.name}</span></h5>
                  <p className="text-warning">
                    {item.occupation[0]}
                  </p>
                  <p className="text-warning">
                    {item.occupation[1]}
                  </p>
                  <p className="text-warning">
                    {item.occupation[2]}
                  </p>
                  <p className="text-warning">
                    {item.occupation[3]}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Nickname : {item.nickname}</li>
                  <li className="list-group-item">Birthday : {item.birthday}</li>
                  <li className="list-group-item">Actor : {item.portrayed}</li>
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrbaSearch;
