import React from "react";

// import {
//     Route,
//     Switch,
// } from "react-router-dom";

import Players from "./Players";

const App = () => (
  <React.Fragment>
    { /* header should show on all pages */ }
    <header><h1 style={{ textAlign: "center" }} className="jumbotron">Five A Side</h1></header>
    <Players />
  </React.Fragment>
);

export default App;