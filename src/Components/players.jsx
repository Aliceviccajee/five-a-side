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

handleDelete(id) {
  this.props.onDelete(id);
}

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

//adds an enter function that prevents a li being added if the inout fields is empty. 
//sets the value of input back to nothing

render() {

  const teams = this.state.players;
  const team1 = teams.filter((player, id) => id % 2 !== 0);
  const team2 = teams.filter((player, id) => id % 2 === 0);
  //takes the shuffled array of players then slices it into two teams

  const { players } = this.props;
  const { value } = this.state;


return(
  <React.Fragment>

    <div style={{ textAlign: "center", marginBottom: "25px" }}> 
      { players.length >= 10
      ? (<button onClick={ this.handleClicked }
         className="btn btn-outline-success" style={{ margin: "4px", fontFamily: "Anton" }}>Create your Teams</button>)
       : (<button className="btn btn-outline-danger" style={{ margin: "4px", fontFamily: "Anton" }}>ADD 10 PLAYERS TO CREATE YOUR TEAMS</button>)
      }
    </div>
        

    <form style={{ textAlign: "center", marginBottom: "25px", display: "block" }} onSubmit={ this.handleSubmit }>
      <input style={{ margin: "auto", width: "40%" }} className="form-control" id="players" onChange={ this.handleChange } value={ value }></input>
      <button className="btn btn-outline-success" style={{ margin: "4px", fontFamily: "Anton" }}>ADD</button>
    </form>
      
      <ul className="list-group">
        { players.map(player => (
          <li style={{ paddingLeft: "30px", margin: "none", width: "20%", float: "left", fontFamily: "Anton" }} 
          key={ player.id }>
            { player.name }
            <button onClick={ () => this.handleDelete(player.id) } style={{ float:"right", marginRight: "60px", fontFamily: "Anton" }} 
            className="btn btn-outline-danger">X</button>
          </li>))} 
      </ul>
  
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
       
    <div className="alert alert-primary float-left" style={{ margin: "20px", width: "35%" }}>
    	<ul style={{padding:"0"}}>
        <h2 style={{ textAlign: "center", fontFamily: "Anton" }}>TEAM 1  <i className="fas fa-football-ball"></i></h2>
        {team1.map((player, index) => { 
          return <li style={{listStyleType: "none"}} key={player.id}>{player.name}</li>
        })}
    	</ul>
    </div>

    <div className="alert alert-secondary float-right" style={{ margin: "20px", width: "35%" }}>
      <ul style={{padding:"0"}}>
        <h2 style={{ textAlign: "center", fontFamily: "Anton" }}>TEAM 2    <i className
        ="fas fa-football-ball"></i></h2>
        {team2.map((player, index) => { 
          return <li style={{listStyleType: "none"}} key={player.id}>{player.name}</li>
        })}
      </ul>
    </div>
    <button onClick={ this.handleReshuffle }
      className="btn btn-info" style={{ letterSpacing: "2px", margin: "4px", fontFamily: "Anton" }}>RE-SHUFFLE</button>

    </div>
  </React.Fragment>
)
}
};

export default Players;
