import React from "react";
import Players from "./Containers/players";



const App = () => (
  <React.Fragment>
    <header><h1 style={{ textAlign: "center" }} className="jumbotron">Five A Side</h1></header>
    <Players />
  </React.Fragment>
);

export default App;