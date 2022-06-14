import React from "react";
import Countries from "./Countries";
import { Routes, Route } from "react-router-dom";
import Country from "./Country";
function App(props) {
  return (
    <div>
      <header>
        <h1>Country App 🚀</h1>
      </header>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/name/:countryName" element={<Country />}></Route>
      </Routes>
    </div>
  );
}

export default App;
