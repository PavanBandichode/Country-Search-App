import React from "react";
import Loader from "./Loader";

import Filter from "./Filter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let countriesUrl = "https://restcountries.com/v3.1/all";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [region, setRegion] = useState("");
  const fetchCountries = async () => {
    const response = await fetch(countriesUrl);
    const countries = await response.json();
    setCountries(countries);
  };
  console.log(countries);

  //a single function wich handles region searchText and return array
  function countryArr() {
    let temp = [];
    if (region) {
      temp = countries.filter((country) => country.region === region);
    }
    if (searchInput) {
      if (temp.length) {
        temp = temp.filter((country) =>
          country.name.common.toLowerCase().includes(searchInput)
        );
      } else {
        temp = countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchInput)
        );
      }
    }
    return region || searchInput ? temp : countries;
  }
  useEffect(() => {
    fetchCountries();
  }, []);
  console.log(countries);
  return (
    <>
      <div className="container">
        <Filter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFiltered={setFiltered}
          setCountries={setCountries}
          countries={countries}
          region={region}
          setRegion={setRegion}
        />
        <ul className="flex justify-content wrap">
          {countryArr().map((country, i) => {
            return (
              <li className="country-card flex-30" key={i}>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt={country.name.common}></img>
                <h2>
                  {" "}
                  Capital : <span>{country.capital}</span>
                </h2>
                <p>Population :{country.population}</p>
                <div>
                  <p>continents</p>
                  <ul className="flex continents">
                    {country.continents.map((ele) => {
                      return <li>{ele}</li>;
                    })}
                  </ul>
                </div>
                <Link to={`/name/${country.name.common.toLowerCase()}`}>
                  <button className="btn">More...</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Countries;
