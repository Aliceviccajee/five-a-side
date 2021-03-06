import React, { Component } from "react";
import { shuffle } from "../Data/shuffle";


class Players extends Component {
  constructor (props) {
    super(props);
      this.state = {
      value: "",
      players: []
    } 
//set initail state to empty

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleClicked = this.handleClicked.bind(this);
this.handleDelete = this.handleDelete.bind(this);
this.handleReshuffle = this.handleReshuffle.bind(this);
}

handleChange(e) {
  let input = e.target.value
  this.setState({
    value: input
  })
}
//input a player

handleReshuffle() {
  let players = this.state.players
  this.setState(shuffle(players));  
}
//sets re-shuffle function to the re-shuffle button

handleDelete(id) {
  this.props.onDelete(id);
}
//delete

handleClicked() {
  this.setState({ players: shuffle(this.state.players.concat(this.props.players))});
}
//takes the inputted players, shuffles them, and then creates an array called players

handleSubmit(e) {
  e.preventDefault();
  if (this.state.value.length >= 1) { 
    let data = this.state.value;
    this.props.onSubmit(data);
    this.setState({
      value: ""
    })
  } else {
      this.setState({
      value: ""
    })
}}

//adds an enter function that prevents a li being added if the inout field is empty.
//passing this state value into the on submit function 
//sets the value of input back to nothing

render() {

  const teams = this.state.players;
  const team1 = teams.filter((player, id) => id % 2 !== 0);
  const team2 = teams.filter((player, id) => id % 2 === 0);
  //takes the shuffled array of players then slices it into two teams

  const { players } = this.props;
  const { value } = this.state;
  //destructuring to make my code neater

return(
  <React.Fragment>

    <div style={{ textAlign: "center", marginBottom: "25px" }}> 
      { players.length === 10 
      ? (<button onClick={ this.handleClicked }
         className="btn btn-outline-success" style={{ margin: "4px", fontFamily: "Anton" }}>Create your Teams</button>)
       : (<button className="btn btn-outline-danger" style={{ margin: "4px", fontFamily: "Anton" }}>ADD 10 PLAYERS TO CREATE YOUR TEAMS</button>)
      }
    </div>
    {/*if the length of the array of players is 10 then we change the content of the button from "add ten players" to "Create your teams"*/}
        
    <form style={{ textAlign: "center", marginBottom: "25px", display: "block" }} onSubmit={ this.handleSubmit }>
      <input style={{ margin: "auto", width: "40%" }} className="form-control" id="players" onChange={ this.handleChange } value={ value }></input>
      <button className="btn btn-outline-success" style={{ marginTop: "10px", fontFamily: "Anton" }}>ADD</button>
    </form>
    {/* sets the handle change to the add button, also sets the handle submit to the form so we have use of the enter button */}
      
    <div style={{width:"100%"}}>
      <ol className="list-group">
        { players.map(player => (
          <li style={{ width: "40%", paddingLeft: "30px", margin: "auto", marginTop: "5px", fontFamily: "Anton" }} 
          key={ player.id }>
            { player.name }
            <button onClick={ () => this.handleDelete(player.id) } style={{ float:"right", marginRight: "60px", fontFamily: "Anton" }} 
            className="btn btn-outline-danger">X</button>
          </li>))} 
      </ol>
    </div>
    {/* function that maps over my array to create a li for every object. li contains a delete function */}

    <div style={{ textAlign: "center", marginBottom: "50px" }}>
         
      <div className="alert alert-primary float-left" style={{ margin: "20px", width: "35%" }}>
      	<ul style={{padding:"0"}}>
          <h2 style={{ textAlign: "center", fontFamily: "Anton" }}>TEAM 1  <i className="fas fa-football-ball"></i></h2>
          {team1.map((player, index) => { 
            return <li style={{listStyleType: "none", fontFamily: "Anton"}} key={player.id}>{player.name}</li>
          })}
      	</ul>
      </div>
      {/* Team 1 takes the even numbered id players and maps over them to create a list */}

      <div className="alert alert-secondary float-right" style={{ margin: "20px", width: "35%" }}>
        <ul style={{padding:"0"}}>
          <h2 style={{ textAlign: "center", fontFamily: "Anton" }}>TEAM 2    <i className
          ="fas fa-football-ball"></i></h2>
          {team2.map((player, index) => { 
            return <li style={{listStyleType: "none", fontFamily: "Anton"}} key={player.id}>{player.name}</li>
          })}
        </ul>
      </div>
      {/* Team 2 takes the odd numbered id players and maps over them to create a list */}

      <button onClick={ this.handleReshuffle }
        className="btn btn-info" style={{ letterSpacing: "2px", marginTop: "60px", fontFamily: "Anton" }}>RE-SHUFFLE</button>
      {/* reshuffles the list if desired */}
    </div>

  </React.Fragment>
  )}
};

export default Players;
