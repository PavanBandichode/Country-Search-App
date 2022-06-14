import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Country(props) {
  let [country, setCountry] = useState([]);

  let { countryName } = useParams();
  const fetchCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const country = await response.json();
    setCountry(country);
    console.log(country);
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  return (
    <div className="container country">
      <Link to="/">
        <button className="btn">back to home page ◀️</button>
      </Link>{" "}
      <section className=" wrap">
        {country.map((country) => {
          return (
            <div className="country-card flex">
              <figure>
                <img src={country.flags.png} alt="baerlin"></img>
              </figure>
              <div className="country-info">
                <h3 className="heading">{country.name.common}</h3>
                <h2>
                  <span>Capital :</span> {country.capital}
                </h2>
                <p>
                  <span>Population :</span> {country.population}
                </p>
                <p>continents:</p>
                <ul className="flex continents">
                  {country.continents.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
                <p>Borders</p>
                <ul className="flex continents">
                  {country.borders.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </div>
              {/* <Link to={`/name/${country.name.common.toLowerCase()}`}>
                <button className="btn">More...</button>
              </Link> */}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Country;
