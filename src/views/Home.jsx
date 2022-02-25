import Brba from "../grid/Brba";
import BrbaSearch from "../grid/BrbaSearch";
import Weather from "../grid/Weather";
import Google from "../grid/Google";
import Map from "../grid/Map";
import Spotify from "../grid/Spotify";
import Food from "../grid/Food";
import Crypto from "../grid/Crypto";
import Flag from "../grid/Flag";

import React, { useState } from "react";

function Home() {
  const [spotify, setspotify] = useState(false);
  const clickspotify = () => {
    if (spotify === true) {
      setspotify(false);
    } else {
      setspotify(true);
    }
  };
  const [google, setgoogle] = useState(false);
  const clickgoogle = () => {
    if (google === true) {
      setgoogle(false);
    } else {
      setgoogle(true);
    }
  };
  const [recipe, setrecipe] = useState(false);
  const clickrecipe = () => {
    if (recipe === true) {
      setrecipe(false);
    } else {
      setrecipe(true);
    }
  };
  const [weather, setweather] = useState(false);
  const clickweather = () => {
    if (weather === true) {
      setweather(false);
    } else {
      setweather(true);
    }
  };
  const [brba, setbrba] = useState(false);
  const clickbrba = () => {
    if (brba === true) {
      setbrba(false);
    } else {
      setbrba(true);
    }
  };
  const [crypto, setcrypto] = useState(false);
  const clickcrypto = () => {
    if (crypto === true) {
      setcrypto(false);
    } else {
      setcrypto(true);
    }
  };
  const [map, setmap] = useState(false);
  const clickmap = () => {
    if (map === true) {
      setmap(false);
    } else {
      setmap(true);
    }
  };
  const [countries, setcountries] = useState(false);
  const clickcountries = () => {
    if (countries === true) {
      setcountries(false);
    } else {
      setcountries(true);
    }
  };
  const clickall = () => {
    setgoogle(true);
    setspotify(true);
    setbrba(true);
    setweather(true);
    setrecipe(true);
    setmap(true);
    setcrypto(true);
    setcountries(true);
  };
  const desableall = () => {
    setgoogle(false);
    setspotify(false);
    setbrba(false);
    setweather(false);
    setrecipe(false);
    setcrypto(false);
    setmap(false);
    setcountries(false);
  };
  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <p>Enable your widgets : </p>
                </li>
                <li className="nav-item">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={clickall}
                    />
                    <label className="form-check-label">All</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                      onClick={desableall}
                    />
                    <label className="form-check-label">Not all |</label>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Spotify |</label>
                    {spotify === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickspotify}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickspotify}
                        />
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Google |</label>
                    {google === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickgoogle}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickgoogle}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Recipe |</label>
                    {recipe === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickrecipe}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickrecipe}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Weather |</label>
                    {weather === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickweather}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickweather}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Breaking Bad |</label>
                    {brba === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickbrba}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickbrba}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Crypto |</label>
                    {crypto === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickcrypto}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickcrypto}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Map |</label>
                    {map === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickmap}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickmap}
                        />{" "}
                      </>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="form-check form-switch">
                    <label className="form-check-label">Countries |</label>
                    {countries === true ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={clickcountries}
                        defaultChecked
                      />
                    ) : (
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          onClick={clickcountries}
                        />
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        {spotify === true ||
        google === true ||
        recipe === true ||
        weather === true ||
        brba === true ||
        map === true ||
        crypto === true ||
        countries === true ? (
          <div />
        ) : (
          <>
            <br />
            <div className="alert alert-warning" role="alert">
              Welcome to your dashboard, choose your widgets!
            </div>
          </>
        )}
        <div className="row">
          {spotify ? <Spotify /> : <br />}
          {google ? <Google /> : <br />}
          {brba ? <Brba /> : <br />}
          {recipe ? <Food /> : <br />}
          {weather ? <Weather /> : <br />}
          {brba ? <BrbaSearch /> : <br />}
          {crypto ? <Crypto /> : <br />}
          {countries ? <Flag /> : <br />}
          {map ? <Map /> : <br />}
        </div>
      </div>
    </>
  );
}

export default Home;
