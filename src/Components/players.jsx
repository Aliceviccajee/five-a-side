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
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }
  //input a player

  handleEdit(e) {
    this.setState({
      editing: true,
    })
    let edit = e.target.value
    this.setState({
      value: edit
    })
  }

  //edit a player

  handleDelete(id) {
    this.props.onDelete(id);
  }

  //delete a player

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

        <form style={{ textAlign: "center", marginBottom: "25px" }} onSubmit={ this.handleSubmit }>
          
          <label htmlFor="players" style={{ display: "block" }}>Add a Player: </label>
          <input style={{ margin: "auto", width: "40%", display: "block" }} className="form-control" id="players" onChange={ this.handleChange } value={ value }></input>
          <button className="btn btn-outline-success" style={{ margin: "4px" }}>Add</button>

        </form>  
          
        <ul className="list-group">
          { players.map(player => (
            <li className="list-group-item" key={ player.id }>
              { player.name }
              <button onClick={ () => this.handleDelete(player.id) } style={{ float:"right", margin: "4px" }} className="btn btn-outline-danger">Delete</button>
            </li>))}
        </ul>




        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <button onClick={ this.handleClicked }
          className="btn btn-outline-success" style={{ margin: "4px" }}>Create your Teams</button>
        </div>
            
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
           
          <div className="alert alert-primary float-left" style={{ margin: "20px", width: "40%" }}>
          	<ul>
              <h2>Panthers</h2>
	            {team1.map((player, index) => { 
	              return <li style={{listStyleType: "none"}} key={player.id}>{player.name}</li>
	            })}
          	</ul>
          </div>


          <div className="alert alert-secondary float-right" style={{ margin: "20px", width: "40%" }}>
            <ul>
              <h2 style={{ textAlign: "center" }}>Lions</h2>
              {team2.map((player, index) => { 
              return <li style={{listStyleType: "none"}} key={player.id}>{player.name}</li>
              })}
            </ul>
          </div>

        </div>
      </React.Fragment>
    )
  }
};


export default Players;

