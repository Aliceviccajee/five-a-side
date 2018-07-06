import React from "react";
import Players from "./Containers/players";
import pitch from "./Data/pitch.jpg";



const App = () => (
  <React.Fragment>
    <header style={{ color: "white", textAlign: "center" }}>
    	<h1 className="jumbotron" style={{ backgroundImage: `url(${pitch})`, fontFamily: "Galada" }}>5-A-Side</h1></header>
    <Players />
  </React.Fragment>
);

export default App;