import React from "react";
import Players from "./Containers/Players";
import Team from "./Containers/Team";



const App = () => (
  <React.Fragment>
    { /* header should show on all pages */ }
    <header><h1 style={{ textAlign: "center" }} className="jumbotron">Five A Side</h1></header>
    <Players />
    <Team />
  </React.Fragment>
);

export default App;