import React, { Component } from "react";
import { shuffle } from "../Data/shuffle";


class Players extends Component {
  constructor (props) {
    super(props);
      this.state = {
      value: "",
      players: []
    } 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }

  handleClicked() {
    this.setState({ players: this.state.players.concat(this.props.players) });
  }

//local function that takes the input value and assigns it to state value.

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


  render() {

    const team1 = shuffle(this.state.players).filter((name, index) => index % 2 === 0);
    const team2 = shuffle(this.state.players).filter((name, index) => index % 2 !== 0);

    const { players } = this.props;
    const { value } = this.state;
	return(

      <React.Fragment>

        <form style={{ textAlign: "center", marginBottom: "25px" }} onSubmit={ this.handleSubmit }>
          
          <label htmlFor="players" style={{ display: "block" }}>Add a Player: </label>
          <input id="players" onChange={ this.handleChange } value={ value }></input>
          <button className="btn btn-outline-success" style={{ margin: "4px" }}>Add</button>
        </form>  
          
          <ul className="list-group">
            { players.map(players => (
              <li className="list-group-item" key={ players.id }>
                { players.name }
              </li>
            ))}</ul>
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
	            <button onClick={ this.handleClicked } 
	            className="btn btn-outline-success" style={{ margin: "4px" }}>Create your Teams</button>
            </div>
            
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
           
            <div className="alert alert-primary float-left" style={{ margin: "20px", width: "40%" }}>
	          	<ul>
		            {team1.map((player, index) => { 
		              return <li key={player.id}>{player.name}</li>
		            })}
	          	</ul>
	           </div>

            <div className="alert alert-secondary float-right" style={{ margin: "20px", width: "40%" }}>
              <ul>
                {team2.map((player, index) => { 
                  return <li key={player.id}>{player.name}</li>
                })}
              </ul>
            </div>

        	</div>
      </React.Fragment>
    )
  }
};


export default Players;
