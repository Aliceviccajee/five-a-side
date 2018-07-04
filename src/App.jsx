import React from "react";
import Players from "./Containers/players";
import Team from "./Containers/Team";

const App = () => (
  <React.Fragment>
    { /* header should show on all pages */ }
    <header><h1 style={{ textAlign: "center" }} className="jumbotron" background-image: src(./pitch.jpg);
    >Five A Side</h1></header>
    <Players />
  </React.Fragment>
);

export default App;