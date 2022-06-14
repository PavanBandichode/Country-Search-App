import React from "react";

const Filter = (props) => {
  let { setSearchInput, region, setRegion } = props;

  return (
    <section className="flex justify-content filter">
      <form className="form">
        <input
          type="search"
          name="search"
          placeholder="Search by country..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </form>
      <div>
        <select
          name="region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
          <option value="">select region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
